import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://sinurbe.pt",
    output: "static",
    integrations: [
          sitemap({
                  changefreq: "weekly",
                  priority: 0.8,
                  lastmod: new Date(),
          }),
        ],
    build: {
          inlineStylesheets: "auto",
          assets: "_astro",
    },
    vite: {
          build: {
                  chunkSizeWarningLimit: 1200,
          },
    },
});
