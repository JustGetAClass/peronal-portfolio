# Mohamed Salat Gelle — Personal Portfolio

A single-page portfolio website built with React, TypeScript, Vite, TailwindCSS, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server and bundler
- **TailwindCSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations
- **shadcn-compatible UI components** — Button, Card, Badge (written manually in `src/components/ui/`)

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:5173
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Customization

All content lives in **`src/data/index.ts`** — it's the single source of truth. Edit that file to update:

- Personal info (name, title, bio, email, social links)
- Skills marquee
- Work & education timeline
- Projects

No other files need to be touched for content changes. The CV is served from `public/cv.html`.

## Docker

```bash
docker compose up --build   # Builds and serves on http://localhost:8080
```

Or manually:

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## Project Structure

```
src/
├── App.tsx               # Root component — assembles all sections
├── data/index.ts         # All content (edit this to personalize)
├── components/
│   ├── sections/         # Hero, Stats, MarqueeSection, Timeline, Projects, Contact
│   └── ui/               # Button, Card, Badge
└── lib/utils.ts          # cn() helper (clsx + tailwind-merge)
```
