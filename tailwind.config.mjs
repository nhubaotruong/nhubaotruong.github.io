/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
} 