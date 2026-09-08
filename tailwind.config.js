/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans-custom": [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        script: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
