// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hisqu.de",
  base: "/",

  integrations: [icon()],

  i18n: {
    locales: ["en"], // add as many as you need
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false }, // "/about" (EN) and "/de/about"
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
