# CLAUDE.md

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- SCSS modules + Tailwind (`src/app/scss`)
- Three.js via `@react-three/fiber` and `@react-three/drei` for the 3D scene
- EmailJS (`@emailjs/browser`) for the contact form

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Node version
Use the version pinned in `.nvmrc` (`nvm use`) rather than a global Node install — mismatches have caused dev-server issues.

## Structure
- `src/app/(3d-scene)/` — home, about, projects, contact pages (3D landing experience)
- `src/app/(mirosh)/` — profile page
- `src/components/3D/` — Three.js scene, models, popups, navbar
- `src/components/Landing/` — 2D landing page components
- `src/lib/3D/` — 3D config, types, screen utilities
