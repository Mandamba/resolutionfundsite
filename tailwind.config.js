/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/js/**/*.js",
    "node_modules/tw-elements/dist/tw-elements.umd.js"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("tw-elements/plugin.cjs")
  ],
}
