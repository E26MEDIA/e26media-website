# E26 Media — Product Requirement Document (PRD)

## 1. Project Vision & Overview
Build a premium, modern, responsive corporate website for E26 Media. The website looks like a world-class technology company (similar to Stripe, Vercel, Apple, and Webflow). The design is clean, elegant, minimal, and conversion-focused with a white background, zinc grayscale structures, and precise green brand identity.

## 2. Core Constraints
- Focus **ONLY** on B2B business services.
- **PROHIBITED CONTENT**: No training, courses, internships, students, certifications, or educational services.
- If asked about educational topics, the AI consultant must politely clarify that E26 Media operates exclusively as an enterprise software and digital solutions partner, and does not offer educational programs.

## 3. User Personas
- **Enterprise Executive (e.g. CTO/VP of Product)**: Looks for a high-performance tech partner to build custom software, web systems, or mobile apps. Seeks confidence, modern design, and robust capabilities.
- **Admin/Solutions Architect**: Manages incoming lead requests, modifies their status, tracks analytics, and filters incoming workflows.

## 4. Architectural Setup (Implemented on June 26, 2025)
- **Frontend**: Single-Page App built on React with Tailwind CSS, Lucide icons, Recharts, and Framer Motion micro-interactions.
- **Backend**: FastAPI server connected to MongoDB.
- **Authentication**: JWT HS256 auth for administrative endpoints.
- **AI Integrations**: Chatbot utilizing OpenAI gpt-5.4 via `emergentintegrations` SSE streaming.

## 5. What Has Been Implemented (As of June 2025)
- **Public Website Pages**:
  - Sticky Navigation Bar (Responsive, responsive hamburger, smooth scroll hooks).
  - Hero Section (Laptop & Mobile visual frame SVG mockup with path graph drawing animations).
  - Bento Services Catalog (Four primary capability grids: Web Design, Software Dev, Mobile Apps, Digital Marketing).
  - Why Choose Us (Experienced Team, Tailored Solutions, Scalable Tech, Dedicated Support).
  - Process Timeline (Vertical timeline indicating phases from Discovery to Support).
  - Masonry Portfolio Grid (Filtered by capability, zoom-on-hover images, custom case study buttons).
  - Infinite Marquee Technology Slider (Auto-scrolling stack).
  - Client Testimonials Grid (5-star reviews, roles, desaturated card designs).
  - Contact/Consultation Form (Piped to `/api/leads` endpoint with full error state and toast indicator).
  - Dark Mode Contrast Footer.
- **AI Consultant Chatbot**:
  - Floating bottom-right bubble.
  - Glassmorphic backdrop blur style panel.
  - Streaming SSE decoder mapping bot responses in real-time.
  - Rigid prompt filtering blocking any mention of internships, training, or student courses.
- **Administrative Command Deck**:
  - Secured route at `/admin` with standard administrative login credentials.
  - Dense KPI dashboards (Gross lead volumes, status trackers).
  - Lead Activity Recharts line graph tracking daily consultation volumes.
  - Lead management database table supporting real-time search, status filtering, status updates, and deletions.

## 6. Multi-Page Upgrade (Implemented June 26, 2026)
Transformed the single-page site into a dynamic, CMS-ready multi-page platform with react-router.
- **Routing (App.js + Layout)**: Shared Layout (Nav + Footer + ScrollProgress + AIConsultant + ScrollToTop) wraps all public pages via Outlet. Admin remains standalone at /admin.
- **Pages**: Home (`/`), Services hub (`/services`), Service detail (`/services/:slug` — 4 slugs), Portfolio (`/portfolio`), About (`/about`), Contact (`/contact`).
- **CMS-ready data layer** at `/app/frontend/src/data/`: `site.js` (contact/social/nav), `services.js` (4 services + detail content + galleries), `portfolio.js` (10 projects + categories), `testimonials.js`, `clients.js`, `about.js`. New content can be added without touching layout.
- **Reusable components**: PageHero, CTASection, ServicesPreview, FeaturedPortfolio, ClientLogos, AboutPreview, ProjectCard, ProjectModal, ContactForm, Icon (lucide map), ScrollToTop, Layout.
- **Navigation**: NavLink routing + hover Services dropdown (desktop) + expandable mobile menu.
- **Portfolio**: dynamic filter (All / Web Development / Software Development / Mobile Apps / Digital Marketing) + details modal.
- **Contact**: two-column form -> POST /api/leads, WhatsApp click button (wa.me), Google Map iframe embed.
- **Verified**: Testing agent iteration_1 — 100% backend + frontend pass (routing, dropdown, service pages, invalid-slug redirect, portfolio filter+modal, contact form persistence via admin API).

## 7. Prioritized Backlog
- **P0**: Direct notification email trigger on new consultation (Resend/SendGrid).
- **P1**: Move portfolio/services/testimonials data to MongoDB + admin CRUD UI (full CMS).
- **P1**: Per-page SEO meta tags (react-helmet) + sitemap.xml.
- **P2**: Password reset for admin; Dark/Light theme toggle.
