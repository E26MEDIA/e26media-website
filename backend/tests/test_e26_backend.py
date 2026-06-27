"""E26 Media backend API tests - leads + admin auth flows."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
# Fallback to frontend/.env if not in env
if not BASE_URL:
    try:
        with open('/app/frontend/.env') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                    break
    except Exception:
        pass

ADMIN_EMAIL = "admin@e26media.com"
ADMIN_PASSWORD = "E26AdminSecure2026!"


@pytest.fixture(scope="session")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(api):
    r = api.post(f"{BASE_URL}/api/admin/login",
                 json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD},
                 timeout=20)
    assert r.status_code == 200, f"Admin login failed: {r.status_code} {r.text}"
    tok = r.json().get("access_token")
    assert tok
    return tok


# --- Health ---
def test_root(api):
    r = api.get(f"{BASE_URL}/api/", timeout=15)
    assert r.status_code == 200
    assert "E26" in r.json().get("message", "")


# --- Leads creation ---
def test_create_lead_success(api):
    unique = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST_User_{unique}",
        "company": "TEST_Co",
        "email": f"test_{unique}@example.com",
        "phone": "+1-555-1234",
        "service": "Web Design & Development",
        "message": "Automated test lead - please ignore."
    }
    r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=20)
    assert r.status_code == 200, f"{r.status_code} {r.text}"
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["status"] == "New"
    assert "id" in data or "_id" in data
    pytest.lead_email = payload["email"]
    pytest.lead_name = payload["name"]


def test_create_lead_validation_missing_field(api):
    r = api.post(f"{BASE_URL}/api/leads",
                 json={"name": "x", "email": "x@x.com"}, timeout=20)
    assert r.status_code in (400, 422)


def test_create_lead_empty_strings(api):
    r = api.post(f"{BASE_URL}/api/leads", json={
        "name": "", "company": "", "email": "", "phone": "",
        "service": "", "message": ""
    }, timeout=20)
    assert r.status_code in (400, 422)


# --- Admin auth ---
def test_admin_login_invalid(api):
    r = api.post(f"{BASE_URL}/api/admin/login",
                 json={"email": ADMIN_EMAIL, "password": "wrong"}, timeout=20)
    assert r.status_code == 401


def test_admin_login_ok(admin_token):
    assert isinstance(admin_token, str) and len(admin_token) > 10


def test_admin_leads_requires_auth(api):
    r = api.get(f"{BASE_URL}/api/admin/leads", timeout=20)
    assert r.status_code == 401


def test_admin_leads_lists_and_persists(api, admin_token):
    headers = {"Authorization": f"Bearer {admin_token}"}
    r = requests.get(f"{BASE_URL}/api/admin/leads", headers=headers, timeout=20)
    assert r.status_code == 200
    leads = r.json()
    assert isinstance(leads, list)
    # Verify the lead created earlier appears
    target = getattr(pytest, "lead_email", None)
    if target:
        emails = [l.get("email") for l in leads]
        assert target in emails, f"Newly created lead not found in admin list. Got {len(emails)} leads"


def test_admin_stats(api, admin_token):
    headers = {"Authorization": f"Bearer {admin_token}"}
    r = requests.get(f"{BASE_URL}/api/admin/stats", headers=headers, timeout=20)
    assert r.status_code == 200
    d = r.json()
    assert "total_leads" in d
    assert "by_status" in d
    assert "activity" in d
