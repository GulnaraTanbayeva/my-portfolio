import { defineConfig } from "astro/config";

export default defineConfig({
  // No adapter needed for static Railway deployment
  outDir: "./dist",
  site: "https://my-portfolio-production-5307.up.railway.app.com", // Optional but good for SEO
});
