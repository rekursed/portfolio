# Copilot Instructions for AI Coding Agents

## Project Overview

This is a Next.js portfolio site, bootstrapped with `create-next-app`. The codebase uses the Next.js App Router and TypeScript. The main entry point is `src/app/page.tsx`.

## Architecture & Key Files

- **App Structure:**
  - `src/app/`: Contains global styles (`globals.css`), layout (`layout.tsx`), favicon, and the main page (`page.tsx`).
  - `src/components/`: Reusable UI components (e.g., `theme-toggle.tsx`).
  - `public/`: Static assets (SVGs, images, PDF resume).
- **Styling:** Uses global CSS and may use PostCSS (`postcss.config.mjs`).
- **Config Files:**
  - `next.config.ts`: Next.js configuration.
  - `eslint.config.mjs`: ESLint rules (check for custom linting conventions).
  - `tsconfig.json`: TypeScript settings.

## Developer Workflows

- **Start Dev Server:**
  - `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Live Reload:** Editing files in `src/app/` or `src/components/` triggers hot reload.
- **Build:**
  - `npm run build` to create a production build.
- **Lint:**
  - `npm run lint` to check code quality (see `eslint.config.mjs` for custom rules).

## Patterns & Conventions

- **Component Organization:** Place reusable UI in `src/components/`. Keep pages and layouts in `src/app/`.
- **TypeScript:** All code is written in TypeScript. Use type annotations and interfaces for props.
- **Static Assets:** Store images, SVGs, and PDFs in `public/` for direct access via `/` URLs.
- **Font Optimization:** Uses `next/font` for loading and optimizing fonts (see README for Geist font usage).

## Integration Points

- **External:**
  - Deploys on Vercel (see README for deployment links).
  - Uses Next.js and Vercel-specific features (e.g., font optimization).

## Examples

- To add a new page, create a file in `src/app/` (e.g., `about/page.tsx`).
- To add a new component, place it in `src/components/` and import into a page or layout.
- To reference an image, use `/public/filename.ext` and import or reference as `/filename.ext` in JSX.

## Additional Notes

- No custom server or API routes detected; focus is on static and client-rendered content.
- Check `README.md` for up-to-date workflow and deployment instructions.

---

_If any conventions or workflows are unclear, ask the user for clarification or examples from their recent work._
