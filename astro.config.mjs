import { fileURLToPath } from "node:url";
// @ts-check
import { defineConfig } from "astro/config";
import { readFileSync, readdirSync } from "node:fs";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

function readBlogLastmod() {
  const dir = fileURLToPath(new URL("./content/blogs", import.meta.url));
  /** @type {Record<string, string>} */
  const map = {};
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".mdx")) continue;
    const raw = readFileSync(`${dir}/${file}`, "utf-8");
    const fm = raw.split("---")[1] ?? "";
    const slug = fm.match(/^\s*slug:\s*["']?(.+?)["']?\s*$/m)?.[1];
    const publishedAt = fm.match(/^\s*publishedAt:\s*["']?(.+?)["']?\s*$/m)?.[1];
    if (slug && publishedAt) map[`/blog/${slug}`] = publishedAt;
  }
  return map;
}

const blogLastmod = readBlogLastmod();

// https://astro.build/config
export default defineConfig({
  site: "https://tuerre.vercel.app",
  adapter: vercel(),
  redirects: {
  "/resume": "/CV-JendryDeLeonAbreu.pdf",

  "/es": "/",
  "/es/projects": "/projects",
  "/es/resume": "/CV-JendryDeLeonAbreu.pdf",

  "/en": "/",
  "/en/projects": "/projects",
  "/en/resume": "/CV-JendryDeLeonAbreu.pdf",
},
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, "") || "/";
        // La home: máxima prioridad y frecuencia.
        if (path === "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        // lastmod preciso solo para posts (fecha real de publicación).
        const lastmod = blogLastmod[path];
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
    }),
  ],
  // Keep code blocks plain (as the original next-mdx-remote render did — no highlighter),
  // so blog styling comes purely from the `prose-*` classes.
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL(".", import.meta.url)),
      },
    },
  },
});
