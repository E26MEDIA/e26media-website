from fastapi import FastAPI, APIRouter, HTTPException, Depends, status, Request
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
import logging
import jwt
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from pydantic_core import PydanticCustomError
from typing import List, Optional, Dict, Any, Annotated
import uuid
from datetime import datetime, timezone, timedelta
from passlib.context import CryptContext
import requests

# Load Environment
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Log Config
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Config Env
MONGO_URL = os.environ.get('MONGO_URL')
DB_NAME = os.environ.get('DB_NAME', 'e26media')
JWT_SECRET = os.environ.get('JWT_SECRET', 'supersecure_jwt_secret_key_e26_2026')
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@e26media.com')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'E26AdminSecure2026!')
GOOGLE_SHEETS_WEBHOOK_URL = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')

if not MONGO_URL:
    logger.warning("MONGO_URL is not set — database routes will be unavailable")

# MongoDB Client
client = AsyncIOMotorClient(MONGO_URL) if MONGO_URL else None
db = client[DB_NAME] if client else None

# Password Hash Context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# App & Router
app = FastAPI(title="E26 Media API")
api_router = APIRouter(prefix="/api")

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------- MongoDB / Pydantic V2 Setup ----------------- #
def validate_object_id(v: Any) -> ObjectId:
    if isinstance(v, ObjectId):
        return v
    if isinstance(v, str) and ObjectId.is_valid(v):
        return ObjectId(v)
    raise PydanticCustomError("object_id", "invalid ObjectId")

PyObjectId = Annotated[str, BeforeValidator(str)]

class BaseDocument(BaseModel):
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True
    )
    
    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()), alias="_id")

    @classmethod
    def from_mongo(cls, data: Dict[str, Any]) -> Any:
        if not data:
            return None
        if "_id" in data:
            data["_id"] = str(data["_id"])
        return cls(**data)

    def to_mongo(self) -> Dict[str, Any]:
        data = self.model_dump(by_alias=True)
        if "_id" in data and isinstance(data["_id"], str):
            try:
                data["_id"] = ObjectId(data["_id"])
            except Exception:
                pass
        return data

# ----------------- Database Models ----------------- #
class Lead(BaseDocument):
    name: str
    company: str
    email: str
    phone: str
    service: str
    message: str
    status: str = Field(default="New")  # New, Contacted, In Progress, Closed
    createdAt: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1)
    company: str = Field(..., min_length=1)
    email: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=1)
    service: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1)

class LeadStatusUpdate(BaseModel):
    status: str

class AdminLogin(BaseModel):
    email: str
    password: str

class ChatPayload(BaseModel):
    message: str
    sessionId: Optional[str] = None

# ----------------- Auth Helpers ----------------- #
def require_db():
    if db is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database is not configured"
        )
    return db

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta = timedelta(hours=8)):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm="HS256")
    return encoded_jwt

async def get_current_admin(request: Request):
    require_db()
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid authentication header"
        )
    token = auth_header.split(" ")[1]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token invalid: no subject"
            )
        admin = await db.admins.find_one({"email": email})
        if not admin:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Admin user not found"
            )
        return admin
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expired"
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalid"
        )

def append_lead_to_google_sheets(lead_in: LeadCreate) -> bool:
    if not GOOGLE_SHEETS_WEBHOOK_URL:
        return False

    payload = {
        "name": lead_in.name,
        "company": lead_in.company,
        "email": lead_in.email,
        "phone": lead_in.phone,
        "service": lead_in.service,
        "message": lead_in.message,
        "submittedAt": datetime.now(timezone.utc).isoformat(),
    }

    try:
        response = requests.post(
            GOOGLE_SHEETS_WEBHOOK_URL,
            json=payload,
            timeout=15,
        )
        response.raise_for_status()
        return True
    except Exception as e:
        logger.error(f"Google Sheets sync failed: {e}")
        return False

# ----------------- Seeding Admin ----------------- #
@app.on_event("startup")
async def seed_admin():
    if db is None:
        logger.warning("Skipping admin seed — database not configured")
        return
    logger.info("Checking admin credentials seeding...")
    existing_admin = await db.admins.find_one({"email": ADMIN_EMAIL})
    if not existing_admin:
        logger.info(f"Seeding admin: {ADMIN_EMAIL}")
        hashed_pwd = hash_password(ADMIN_PASSWORD)
        admin_doc = {
            "email": ADMIN_EMAIL,
            "hashed_password": hashed_pwd,
            "createdAt": datetime.now(timezone.utc).isoformat()
        }
        await db.admins.insert_one(admin_doc)
        logger.info("Admin seeded successfully")
    else:
        logger.info("Admin user already exists")

# ----------------- API Routes ----------------- #
@api_router.get("/")
async def root():
    return {"message": "Welcome to E26 Media API. High-performance digital solutions server."}

@api_router.post("/leads", response_model=Lead)
async def create_lead(lead_in: LeadCreate):
    lead_doc = Lead(
        name=lead_in.name,
        company=lead_in.company,
        email=lead_in.email,
        phone=lead_in.phone,
        service=lead_in.service,
        message=lead_in.message,
        status="New"
    )

    saved_to_db = False
    saved_to_sheets = False

    if db is not None:
        try:
            await db.leads.insert_one(lead_doc.to_mongo())
            saved_to_db = True
        except Exception as e:
            logger.error(f"Error saving lead to database: {e}")

    saved_to_sheets = append_lead_to_google_sheets(lead_in)

    if not saved_to_db and not saved_to_sheets:
        if db is None and not GOOGLE_SHEETS_WEBHOOK_URL:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Contact form is not configured. Connect Google Sheets or MongoDB."
            )
        raise HTTPException(status_code=500, detail="Could not submit consultation request")

    return lead_doc

@api_router.post("/admin/login")
async def admin_login(payload: AdminLogin):
    require_db()
    admin = await db.admins.find_one({"email": payload.email})
    if not admin or not verify_password(payload.password, admin["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    token = create_access_token({"sub": admin["email"]})
    return {"access_token": token, "token_type": "bearer"}

@api_router.get("/admin/leads", response_model=List[Lead])
async def get_leads(
    status_filter: Optional[str] = None,
    service_filter: Optional[str] = None,
    search: Optional[str] = None,
    current_admin: dict = Depends(get_current_admin)
):
    require_db()
    query = {}
    if status_filter:
        query["status"] = status_filter
    if service_filter:
        query["service"] = service_filter
    if search:
        query["$or"] = [
            {"name": {"$regex": search, "$options": "i"}},
            {"company": {"$regex": search, "$options": "i"}},
            {"email": {"$regex": search, "$options": "i"}},
            {"message": {"$regex": search, "$options": "i"}}
        ]
    
    cursor = db.leads.find(query).sort("createdAt", -1)
    leads_docs = await cursor.to_list(length=1000)
    return [Lead.from_mongo(lead_doc) for lead_doc in leads_docs]

@api_router.patch("/admin/leads/{id}/status", response_model=Lead)
async def update_lead_status(
    id: str,
    status_in: LeadStatusUpdate,
    current_admin: dict = Depends(get_current_admin)
):
    require_db()
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid lead ID")
    
    res = await db.leads.find_one_and_update(
        {"_id": ObjectId(id)},
        {"$set": {"status": status_in.status}},
        return_document=True
    )
    if not res:
        raise HTTPException(status_code=404, detail="Lead not found")
    return Lead.from_mongo(res)

@api_router.delete("/admin/leads/{id}")
async def delete_lead(
    id: str,
    current_admin: dict = Depends(get_current_admin)
):
    require_db()
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid lead ID")
    
    res = await db.leads.delete_one({"_id": ObjectId(id)})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {"message": "Lead deleted successfully"}

@api_router.get("/admin/stats")
async def get_admin_stats(current_admin: dict = Depends(get_current_admin)):
    require_db()
    pipeline_status = [
        {"$group": {"_id": "$status", "count": {"$sum": 1}}}
    ]
    pipeline_service = [
        {"$group": {"_id": "$service", "count": {"$sum": 1}}}
    ]
    
    # Simple day breakdown for the past 7 days
    leads_cursor = db.leads.find({}, {"createdAt": 1})
    leads_dates = await leads_cursor.to_list(length=10000)
    
    date_counts = {}
    for lead_item in leads_dates:
        try:
            dt = datetime.fromisoformat(lead_item["createdAt"])
            day_str = dt.strftime("%Y-%m-%d")
            date_counts[day_str] = date_counts.get(day_str, 0) + 1
        except Exception:
            pass
            
    # Sort last 7 days (or fill empty)
    today = datetime.now(timezone.utc)
    chart_data = []
    for i in range(6, -1, -1):
        day = today - timedelta(days=i)
        day_str = day.strftime("%Y-%m-%d")
        chart_data.append({
            "date": day.strftime("%b %d"),
            "leads": date_counts.get(day_str, 0)
        })

    status_counts = await db.leads.aggregate(pipeline_status).to_list(length=100)
    service_counts = await db.leads.aggregate(pipeline_service).to_list(length=100)
    
    status_summary = {item["_id"]: item["count"] for item in status_counts}
    service_summary = {item["_id"]: item["count"] for item in service_counts}
    
    # Fill in default services and statuses if missing
    for st in ["New", "Contacted", "In Progress", "Closed"]:
        if st not in status_summary:
            status_summary[st] = 0
            
    total_leads = sum(status_summary.values())
    
    return {
        "total_leads": total_leads,
        "by_status": status_summary,
        "by_service": service_summary,
        "activity": chart_data
    }

# ----------------- AI Chatbot SSE Stream ----------------- #
@api_router.post("/ai/chat")
async def ai_chat(payload: ChatPayload):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=503, detail="AI chat is not configured on this deployment")

    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone
    except ImportError:
        raise HTTPException(
            status_code=503,
            detail="AI chat requires the Emergent LLM integration package"
        )
        
    session_id = payload.sessionId or str(uuid.uuid4())
    
    system_msg = (
        "You are E26, the premium AI Digital Solutions Consultant representing E26 Media. "
        "E26 Media is an elite enterprise-grade software development, web development, and digital solutions agency. "
        "We build high-performance websites, ERPs, CRMs, bespoke mobile apps, and custom business automation tools. "
        "Colors: brand identity is white background with sharp, clean green accents (#16A34A). "
        "Tone: world-class, minimal, elite, technical, similar to Stripe, Apple, or Vercel. Be elegant, clear, and direct. "
        "Our Core Offerings:\n"
        "1. Web Design & Development (Corporate, ecommerce, landing pages, CMS, custom UI/UX, maintenance)\n"
        "2. Software Development (ERP, CRM, HRMS, billing, inventory systems, enterprise cloud apps, automation)\n"
        "3. Mobile App Development (iOS, Android, Flutter cross-platform, enterprise mobile portals, APIs)\n"
        "4. Digital Marketing (SEO, Google/Meta ads, brand strategies, email marketing, analytics & reporting)\n\n"
        "CRITICAL RULE:\n"
        "- Do NOT under any circumstances mention, offer, or accept requests about training courses, student internships, certifications, academic partnerships, or educational services. E26 Media is strictly a B2B technology delivery partner.\n"
        "- If a user asks about internships, courses, training, or certifications, politely and professionally inform them that E26 Media operates exclusively as an enterprise software development and digital transformation agency for businesses and does not offer educational or training courses. Offer to assist them with enterprise software, app development, or digital marketing solutions instead.\n"
        "- Encourage visitors to submit their details via our Contact form to secure a 'Free Consultation' with our human architect team.\n\n"
        "KNOWLEDGE BASE — Use these verified answers when relevant. Keep replies concise and always steer interested visitors toward booking a free consultation via the Contact page:\n"
        "Q: What services does E26 Media offer? A: Web Design & Development; Software Development (ERP, CRM, billing, automation, enterprise/cloud apps); Mobile App Development (iOS, Android, Flutter, ecommerce/business apps); and Digital Marketing (SEO, Google/Meta Ads, social, branding, lead generation).\n"
        "Q: How much does a project cost? A: It depends on scope; every project starts with a free consultation and a transparent fixed quote. Invite them to share requirements via the Contact form.\n"
        "Q: How long does a project take? A: Marketing sites ~3-6 weeks; custom software/mobile apps ~8-16+ weeks, with clear milestones defined in planning.\n"
        "Q: Do you build ERP/CRM? A: Yes — bespoke ERP, CRM, billing, inventory, and automation tools on secure, scalable cloud infrastructure.\n"
        "Q: iOS and Android apps? A: Yes — native iOS (Swift), Android (Kotlin), and cross-platform Flutter from one codebase.\n"
        "Q: SEO and digital marketing? A: Yes — technical SEO, Google/Meta Ads, social, branding, and lead generation, all tied to measurable ROI.\n"
        "Q: What technologies? A: React, Next.js, Node.js, Laravel, Flutter, PHP, Firebase, MongoDB, MySQL, AWS, Docker, WordPress.\n"
        "Q: Ongoing support? A: Yes — ongoing support, monitoring, updates, and optimization packages after launch.\n"
        "Q: How to get started? A: Request a free consultation via the Contact page; the team responds within 24 business hours.\n"
        "Q: Where are you located? A: 5th Floor Shalimar Complex, Near Old Ganesh Medical, Kanakanady, Mangalore - 575002; we work with clients globally and remotely.\n"
        "Q: Phone/Email? A: Phone +91 8495901407 or +91 7337753124; Email hr@e26media.com."
    )
    
    try:
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=system_msg
        ).with_model("openai", "gpt-5.4")
        
        async def event_generator():
            try:
                user_msg = UserMessage(text=payload.message)
                async for event in chat.stream_message(user_msg):
                    if isinstance(event, TextDelta):
                        # Format as SSE event
                        # Escape newlines for SSE format
                        content = event.content.replace("\n", "\\n")
                        yield f"data: {content}\n\n"
                    elif isinstance(event, StreamDone):
                        yield "data: [DONE]\n\n"
                        break
            except Exception as e:
                logger.error(f"Error during SSE stream: {str(e)}")
                yield f"data: Error: {str(e)}\n\n"
                yield "data: [DONE]\n\n"
                
        return StreamingResponse(
            event_generator(),
            media_type="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
                "Connection": "keep-alive"
            }
        )
    except Exception as e:
        logger.error(f"Error initializing chat: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to initialize AI session: {str(e)}")

# Include routes
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()
