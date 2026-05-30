# Akbar Portfolio — PRD

## Original Problem Statement
Create a modern, minimalistic, elegant, professional personal portfolio (frontend-only) with premium SaaS feel inspired by Apple, Vercel, Linear, Raycast. Glassmorphism, dark/light mode toggle, framer-motion animations, custom cursor, floating particles, gradient background.

## User Choices
- Identity: "Akbar — Web Developer & Creative Programmer" (example)
- Accent: Blue → Purple gradient mix
- Socials: Placeholder links (#)
- Projects: 5 example projects with placeholder images & links
- Polish: Floating particles + custom cursor spotlight enabled

## Architecture
- React 19 + React Router 7 (BrowserRouter)
- Tailwind CSS + custom CSS variables for theme tokens
- Framer Motion 11 for animations (stagger, scroll reveal, layout pill)
- lucide-react for icons
- Fontshare CDN: Cabinet Grotesk (display) · Google Fonts: Manrope (body) + JetBrains Mono
- Custom CSS-only particles + radial-gradient mouse spotlight on `.spotlight` cards
- Theme switching via `useTheme` hook → toggles `dark`/`light` class on `<html>`, persists to localStorage key `akbar.portfolio.theme`

## Routes
- `/` → HomePage (Hero, About, TechStack, Timeline, Contact)
- `/projects` → ProjectsPage (full grid + back link)

## Implemented (2025-12)
- Floating glass pill navbar with animated layoutId pill, active section tracking via IntersectionObserver
- Hero: avatar (floaty animation), gradient name, View Projects + Contact Me buttons
- About: bio + 3 achievement cards with mouse-spotlight on hover
- Tech Stack: 8 glass cards with animated progress bars
- Timeline: 5 milestones, alternating left/right, fade-up reveal
- Projects grid: 5 cards (ai-emotion, coding-game, video-downloader, weather-ml, youtube-tools) with GitHub + Live Demo buttons
- Contact form (mocked submit shows "Message sent" state)
- Footer with floating tooltipped social icons
- Dark/light theme toggle persisted in localStorage
- Custom cursor (dot + ring with hover state, mix-blend-mode: difference)
- Floating particles + animated gradient orbs background
- Full responsive (mobile/tablet/desktop)
- All interactive elements carry unique `data-testid`

## Testing Status
- Iteration 1: 100% frontend pass (see /app/test_reports/iteration_1.json) — all flows verified, zero console errors.

## Backlog (P1/P2)
- P1: Wire real GitHub / LinkedIn / Email URLs when user provides them
- P1: Replace placeholder project repos & demo URLs with real links
- P2: Add project detail pages (e.g., `/projects/:id`) with case studies
- P2: Add blog/writing section
- P2: Hook contact form to a real backend (FastAPI + email service / Resend)
- P2: Add OG meta tags + sitemap for SEO
- P2: Lighthouse pass — image optimisation, font preloading

## Next Tasks
- Collect real social/profile links from user
- Optionally connect contact form to backend
