import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tuerre.vercel.app",
  integrations: [tailwind(), sitemap()],
});
