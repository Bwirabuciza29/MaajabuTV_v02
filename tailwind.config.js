/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0714D4",
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"],
        serif: ["General Sans", "serif"],
      },
    },
  },
  plugins: [],
};
