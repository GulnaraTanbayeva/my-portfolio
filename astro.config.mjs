import { defineConfig } from "astro/config";

export default defineConfig({
  // If you are deploying a static site, no special config is needed.
  // Railway will serve the 'dist' folder.
  outDir: "./dist",
});
