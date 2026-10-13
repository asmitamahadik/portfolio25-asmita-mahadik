# Asmita Mahadik: Portfolio

Personal developer portfolio with project case studies, built with React and TypeScript.

**Live:** https://portfolio25-asmita-mahadik.vercel.app

## What's on it

- Hero, About, Projects, Skills, Experience and Contact sections
- Project case studies
- Animated particles background and a floating navigation dock
- Responsive layout for desktop, tablet and mobile

## Tech stack

- React and TypeScript, built with Vite
- Tailwind CSS and shadcn/ui components
- React Router

## Getting started

Requires Node.js 18 or later.

```bash
git clone https://github.com/asmitamahadik/portfolio25-asmita-mahadik.git
cd portfolio25-asmita-mahadik
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── layout/      Navigation, particles background, floating dock
│   ├── sections/    Hero, About, Projects, Skills, Experience, Contact
│   └── ui/          shadcn/ui components
├── data/            Project and skill content
├── hooks/
└── pages/
```

To update the projects or skills shown on the site, edit the files in `src/data/`.

## Deployment

The site is deployed on Vercel.
