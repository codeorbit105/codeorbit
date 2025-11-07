# Arikab -> inStudio Clone (Full-stack)

This repo contains a React frontend (Vite) and Node/Express backend. The frontend UI/UX is styled to match the inStudio design while using content from arikab2b.in (you provided permission).

## Quick start

### Backend
```
cd backend
npm install
cp .env.example .env
# Set SENDGRID_API_KEY or GMAIL creds in .env
npm run start:dev
```

### Frontend
```
cd frontend
npm install
# set VITE_API_URL in frontend/.env to http://localhost:5000 (or your deployed backend)
npm run dev
```

## Deployment
- Backend: Render / Railway / Vercel (serverless). Add env vars on provider.
- Frontend: Vercel (set VITE_API_URL).
- Point domain to Vercel for frontend and to Render for API (or use subdomain api.yourdomain.com).

## Notes
- Download original images from arikab2b.in and place them in frontend/public/assets/ (hero.jpg, logo-1.jpg, logo-2.jpg, logo-3.jpg).
- Do not commit secrets to git.
