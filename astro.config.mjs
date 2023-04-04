import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import purgecss from "astro-purgecss";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), purgecss(), critters({ pruneSource: true, preload: "swap", inlineFonts: true })],
  site: "https://nhubaotruong.github.io"
});