// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hisqu.de",
  base: "/",

  integrations: [icon()],

  // Every <Image> and Markdown image gets a srcset; call sites only pass their max rendered `width`.
  image: {
    layout: "constrained",
    breakpoints: [320, 480, 640, 960, 1280, 1920],
  },

  i18n: {
    locales: ["en"], // add as many as you need
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false }, // "/about" (EN) and "/de/about"
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
