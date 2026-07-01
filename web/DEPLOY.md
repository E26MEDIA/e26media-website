# E26 Media Website V2 — Deployment

Use your **existing** Vercel project for `www.e26media.com`. Do **not** create a new project.

## Existing Vercel project (update only)

1. Open [vercel.com/dashboard](https://vercel.com/dashboard) → your **existing** E26 Media / `web` project.
2. **Settings → General → Root Directory** must be `web` (not repo root).
3. **Settings → Git** should point to `e26media/e26media-website`, branch `main`.
4. Push to `main` (already done) — Vercel auto-deploys, or click **Redeploy** on the latest deployment.

## Environment variables (already on Vercel)

Your V1 project likely already has one of these — **no new variable needed** unless the form fails:

| Variable | Notes |
|----------|--------|
| `GOOGLE_SHEETS_URL` | Preferred for V2 (server-side) |
| `NEXT_PUBLIC_GOOGLE_SHEETS_URL` | Same URL — V1 name, still works |

V2 reads **either** name (`src/lib/sheets-url.ts`). If the contact form works on production today, leave env as-is.

To add server-side var without changing the URL: duplicate the same Apps Script URL as `GOOGLE_SHEETS_URL` in the **same** project (no new Vercel project).

## Custom domain

Already on the existing project: `e26media.com` / `www.e26media.com`. No DNS changes needed for a redeploy.

## Local development

```bash
cd web
cp .env.example .env.local
# Paste the same GOOGLE_SHEETS / NEXT_PUBLIC URL from Vercel
npm install
npm run dev
```

## Production build

```bash
cd web
npm run build
npm start
```

## After deploy — quick checks

- https://www.e26media.com
- https://www.e26media.com/contact (submit test enquiry)
- https://www.e26media.com/sitemap.xml
