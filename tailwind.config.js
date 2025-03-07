/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        wonder: {
          orange: "#ff8e16",
          fantasyPurple: "#d83eb2",
          kidsRed: "#f92634",
          tastyCoral: "#004aba",
          sportyBlue: "#00c4b4",
          blue: "#a2d40a",
          playGreen: "#a2d40a",
          kidsYellow: "#ffd000"
        }
      }
    },
  },
  plugins: [],
}

