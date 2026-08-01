# tuerre.dev — Portfolio

Portfolio de Jendry De León Abreu, construido con [Astro](https://astro.build) e islas de React.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Scripts

- `pnpm dev` — servidor de desarrollo.
- `pnpm build` — build de producción (salida estática + función serverless para `/api/contributions`).
- `pnpm preview` — previsualiza el build localmente.

## Stack

- **Astro 5** con adapter de Vercel.
- **React** (`@astrojs/react`) para los componentes interactivos como islas.
- **Tailwind CSS v4** vía `@tailwindcss/vite`.
- **MDX** (`@astrojs/mdx`) para el blog mediante content collections (`content/blogs`).
- **@astrojs/sitemap** para el sitemap.
- **Upstash Redis** para cachear las contribuciones de GitHub.

## Variables de entorno

Para el endpoint `/api/contributions` con caché en Redis (opcional; si faltan, hace fetch directo):

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
# Opcional: sobrescribe el origen de la API de contribuciones
GITHUB_CONTRIBUTIONS_API_URL=
```

## Despliegue

Optimizado para [Vercel](https://vercel.com) mediante `@astrojs/vercel`.
