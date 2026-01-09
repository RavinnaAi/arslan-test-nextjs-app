# Nesti AI - Next.js Project

A modern Next.js application with App Router and Tailwind CSS, featuring a real estate AI platform.

## Features

- **Home Page**: Complete landing page with all sections (hero, features, pricing, testimonials, etc.)
- **Login Page**: Split layout with login form and promotional content
- **Signup Page**: Split layout with signup form and promotional content
- **Responsive Design**: Mobile-friendly layouts using Tailwind CSS
- **Modern UI**: Clean design with vibrant green theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

- `/` - Home page
- `/login` - Login page
- `/signup` - Signup page
- `/ssr-test` - SSR verification test page

## Server-Side Rendering (SSR)

✅ **All pages are Server-Side Rendered by default**

This application uses Next.js App Router, which renders all components on the server by default. This means:

- Pages are pre-rendered on the server
- HTML is sent to the client with content already rendered
- Better SEO and initial load performance
- No `"use client"` directives needed (unless you need client-side interactivity)

### Verify SSR

1. **View Page Source**: Right-click → "View Page Source" - you should see full HTML content
2. **Test Page**: Visit `/ssr-test` to see SSR in action
3. **API Route**: Visit `/api/ssr-info` to see server-side API execution
4. **Script**: Run `node scripts/verify-ssr.js` (while dev server is running)

See [docs/SSR_INVESTIGATION.md](docs/SSR_INVESTIGATION.md) for detailed SSR investigation guide.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Server-Side Rendering (SSR)

