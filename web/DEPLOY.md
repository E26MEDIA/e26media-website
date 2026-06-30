# E26 Media Website V2 — Deployment

## Environment variables (Vercel)

Set in **Project Settings → Environment Variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_SHEETS_URL` | Yes | Google Apps Script URL for contact form (same as V1) |

Copy from V1 Vercel project or `.env.local`.

## Deploy to Vercel

1. Push this repo to GitHub (`e26media/e26media-website`)
2. Import project in [Vercel](https://vercel.com)
3. Set **Root Directory** to `web`
4. Framework preset: **Next.js** (auto-detected)
5. Add `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
6. Deploy

## Custom domain

Point `www.e26media.com` to Vercel when ready to switch from V1 (`frontend/`).

## Local development

```bash
cd web
cp .env.example .env.local
# Add NEXT_PUBLIC_GOOGLE_SHEETS_URL
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```
