import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

import db from "@astrojs/db";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://chrispyblog.vercel.app",
  integrations: [preact(), db(), vue({ jsx: true, devtools: true })],
  vite: {
    plugins: [tailwindcss()],
  },
});
