import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://chrispyblog.vercel.app",
  integrations: [preact(), db()]
});