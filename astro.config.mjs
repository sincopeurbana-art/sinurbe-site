import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sinurbe.pt",
  output: "static",
  integrations: [],
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
