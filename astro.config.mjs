import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import compress from "astro-compress";
import critters from "astro-critters";

const crittersConfig = critters({
  pruneSource: true,
  preload: "body",
  inlineFonts: true,
  path: "./dist",
  publicPath: "/",
})

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), compress(), crittersConfig],
  site: "https://nhubaotruong.github.io"
});