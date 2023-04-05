import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import purgecss from "astro-purgecss";
import critters from "astro-critters";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), purgecss(), critters({ pruneSource: true, preload: "body", inlineFonts: true, path: './dist', publicPath: '/' }), compress()],
  site: "https://nhubaotruong.github.io"
});