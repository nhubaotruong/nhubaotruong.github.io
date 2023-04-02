import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), purgecss()],
  site: "https://nhubaotruong.github.io"
});