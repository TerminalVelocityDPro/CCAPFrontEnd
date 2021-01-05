// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "neutral-gray": {
          "800": "#20232A",
          "900": "#181A1B"
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ["dark"]
    }
  },
  plugins: []
};
