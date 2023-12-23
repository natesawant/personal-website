/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#004D85",
          DEFAULT: "#002642",
          dark: "#001D32",
          extradark: "#000B13",
        },
        secondary: "#e94f37",
        offwhite: { dark: "#adada5", DEFAULT: "#f6f7eb" },
      },
    },
  },
  plugins: [],
};
