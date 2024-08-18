import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  //  outDir: './MTK-Munich-dist',
  //  output: 'static',
  site: 'https://taichi-munich.art',
  integrations: [tailwind({
    nesting: true
  }), mdx(), alpinejs(), sitemap()]
});