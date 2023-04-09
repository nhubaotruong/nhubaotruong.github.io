import { defineConfig } from 'astro/config';
import purgecss from "astro-purgecss";
import compress from "astro-compress";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), purgecss(), compress()],
  site: "https://nhubaotruong.github.io"
});