# Amit Nishad — Personal Portfolio

A modern, production-ready personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

`
src/
  app/
    layout.tsx       - Root layout with metadata
    page.tsx         - Main page assembling all sections
    globals.css      - Global styles & design tokens
    sitemap.ts       - SEO sitemap
  components/
    Navbar.tsx       - Sticky navigation with mobile menu
    ui/
      SectionHeading.tsx  - Reusable section heading
      BackToTop.tsx       - Back-to-top button
    sections/
      Hero.tsx        - Hero section
      About.tsx       - About / introduction
      Services.tsx    - Services / what I build
      Work.tsx        - Public project showcase
      Enterprise.tsx  - Confidential enterprise projects
      Experience.tsx  - Professional experience + education + stats
      Skills.tsx      - Technical skills grouped by category
      Contact.tsx     - Contact form + direct contact info
      Footer.tsx      - Footer with links
  lib/
    data.ts          - All portfolio content data
public/
  resume/
    Amit-Nishad-Resume.pdf  <-- ADD THIS FILE MANUALLY
  robots.txt
`

## Getting Started

### 1. Install dependencies

`ash
npm install
`

### 2. Add your resume PDF

Place your resume at:
`
public/resume/Amit-Nishad-Resume.pdf
`

### 3. Update your LinkedIn URL

Open src/lib/data.ts and update:
`	ypescript
linkedin: "https://www.linkedin.com/in/YOUR-ACTUAL-PROFILE",
`

### 4. Run locally

`ash
npm run dev
`

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

`ash
npm run build
npm run start
`

## Deploy to Vercel

### Option A: Vercel CLI

`ash
npm install -g vercel
vercel
`

### Option B: Vercel Dashboard

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" → Import from GitHub
4. Select the repository
5. Click "Deploy"

No environment variables are required. No backend is needed.

> The contact form uses mailto: — it opens the visitor's email client. To use a real form backend later, replace the form action in src/components/sections/Contact.tsx with Formspree or Resend.

## Assets to Add Manually

| File | Description |
|------|-------------|
| public/resume/Amit-Nishad-Resume.pdf | Your resume PDF |
| public/favicon.ico | A custom favicon (optional, default Next.js favicon is used) |

## Customisation

All content is centralised in src/lib/data.ts. Edit that file to:
- Update contact details
- Add/remove projects
- Update experience and education
- Update your LinkedIn URL

## License

Personal portfolio — all rights reserved. © 2026 Amit Nishad.
