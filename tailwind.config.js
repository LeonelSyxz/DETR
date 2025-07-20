/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#dff1ff",
          200: "#b9e5fe",
          300: "#7bd1fe",
          400: "#34bafc",
          500: "#0aa2ed",
          600: "#0081cb",
          700: "#0069a8",
          800: "#055787",
          900: "#0a4870",
          950: "#072e4a",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
