# Silverius Mobile Mechanic — Website

Marketing website for **Silverius Mobile Mechanic LLC**, a mobile auto repair service serving the greater Indianapolis metropolitan area.

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript**
- **Tailwind CSS** — Styling
- **Lucide React** — Icons

## Features

- **Service Pages** — Detailed service catalog with individual pages
- **Online Booking** — Multi-step booking form connected to backend API
- **Contact Form** — With API integration and success/error handling
- **Gallery** — Photo gallery of work
- **FAQ** — Expandable frequently asked questions
- **Responsive** — Mobile-first design
- **Animations** — Scroll reveal effects and page transitions
- **SEO** — Optimized metadata and structured content

## Pages

- `/` — Home (Hero, Services, Trust Stats, Mission, Testimonials, CTA)
- `/services` — Full service catalog
- `/book` — Multi-step booking wizard
- `/contact` — Contact form, service area map, FAQ
- `/about` — About the company and team
- `/gallery` — Work gallery
- `/faq` — Frequently asked questions
- `/terms` — Terms of service

## Local Development

```bash
# Install dependencies
npm install

# Create env file
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Start dev server
npm run dev
```

Available at: `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

## Deployment

Deployed via Vercel or any static hosting that supports Next.js.

---

Built with love by [MaatongTech LLC](https://maatonggroup.com/usa)
