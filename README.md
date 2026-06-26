# Stay Radiant

A full-stack Next.js website for Stay Radiant (Pty) Ltd. The frontend pages and backend API routes run together in one deployable project, so local development and production hosting stay simple.

## Included

- Home, About, Blog, Blog Post, Services, Journal, Shop, Courses, and Contact pages
- Generated editorial image assets in `public/images`
- Backend API routes for contact messages, newsletter signups, services, gallery assets, and blog posts
- Prisma schema for optional PostgreSQL persistence
- Demo-mode API responses when `DATABASE_URL` is not configured

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL optional for production storage

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Environment

Create `.env.local` from `.env.example` if you want database-backed forms:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/stay_radiant?schema=public"
NEXT_PUBLIC_WHATSAPP_NUMBER="27826494134"
```

Without `DATABASE_URL`, contact and newsletter forms still return successful demo responses so the frontend and backend can be tested immediately.

## Database

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

For production:

```bash
npx prisma migrate deploy
```

## Build

```bash
npm run build
```

## Deploy

Deploy the same project to Vercel. Add `DATABASE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER` as environment variables if you want persisted form submissions.
