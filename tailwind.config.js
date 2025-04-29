/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./RGPD.html",
    "./script.js",
    "./global.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
