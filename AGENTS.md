<!-- BEGIN:astro-agent-rules -->
# Astro project

This portfolio was migrated from Next.js to Astro. Stack:

- **Astro 5** (`src/pages/*.astro`, static output + a Vercel adapter for on-demand routes).
- **React islands** (`@astrojs/react`): the interactive components under `components/` are `.tsx`
  and hydrated with `client:load` / `client:visible` from the `.astro` pages. Shared theme state
  lives in `lib/theme.ts` (a next-themes replacement that works across independent islands via the
  DOM `.dark` class + a `themechange` event).
- **Tailwind v4** via `@tailwindcss/vite`. Global styles / design tokens are in
  `src/styles/globals.css` (unchanged from the original v4 authoring).
- **MDX blog** through Astro content collections (`src/content.config.ts`, files in `content/blogs`).
- **Contributions API**: `src/pages/api/contributions.ts` (SSR) fetches GitHub contributions and
  caches them in Upstash Redis when `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are set.

Read the relevant guide in `node_modules/astro/dist/` or https://docs.astro.build before writing code.
<!-- END:astro-agent-rules -->
