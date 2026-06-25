# P2 Internet Cafe & Hair Studio

A Next.js website for P2 Internet Cafe & Hair Studio. The site includes internet cafe services, hair studio services, gallery photos, prices, contact details, and WhatsApp contact support.

## Features

- Home page with P2 Hair Studio logo and nail background image
- Services page for internet cafe, hair studio, car wash, and shisanyama services
- Price list grouped the same way as the services page
- Gallery page grouped into Braids, Nails, and Haircuts
- Contact page with phone, email, location, and enquiry form
- Floating WhatsApp contact button
- Prisma and PostgreSQL support for saving contact messages

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL

## Project Pages

- `/` - Home
- `/services` - Services
- `/prices` - Price list
- `/gallery` - Hair studio gallery
- `/contact` - Contact page

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the site:

```text
http://127.0.0.1:3000
```

## Environment Variables

Create `.env.local` from `.env.example` and set:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/p2_internet_cafe?schema=public"
NEXT_PUBLIC_WHATSAPP_NUMBER="27826410034"
```

The site can still load without `DATABASE_URL`, but the contact form will not save messages to the database.

## Database Setup

Generate Prisma client:

```bash
npm run prisma:generate
```

Run migrations in development:

```bash
npm run prisma:migrate -- --name init
```

For production deployment, run:

```bash
npx prisma migrate deploy
```

## Build

Check TypeScript:

```bash
npx tsc --noEmit
```

Build for production:

```bash
npm run build
```

## Deploy

Recommended hosting: Vercel.

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Add `DATABASE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel environment variables.
4. Deploy.

Use a hosted PostgreSQL database such as Neon or Supabase for `DATABASE_URL`.

## Contact Details Used

```text
Phone: 082 641 0034 / 079 089 3301
Email: psselolo@gmail.com
Location: 617 Ga-Kuranta, Modjadjiskloof, 0835, opposite ZCC
```