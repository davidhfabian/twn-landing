const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["src/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: colors.purple,
      secondary: colors.fuchsia,
      'midnight': '#121063',
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ],
}
