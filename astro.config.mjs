import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tuerre.vercel.app",
  trailingSlash: "ignore",
  compressHTML: true,
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Boost the homepages; they change most often and matter most.
        if (
          item.url === "https://tuerre.vercel.app/" ||
          item.url === "https://tuerre.vercel.app/es/"
        ) {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        return item;
      },
    }),
  ],
});
