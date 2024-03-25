const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#FCFCFD",
        "sidebar-bg": "#F3F3F3",
        "primary-bg": "#518AC7",
        "blue-bg": "#3774B6",
        "sidebar-item-bg": "#FFFFFF",
        "light-blue": "#3774B6",
        "dark-gray": "#7F8183",
        "theme-color": "#6D40FA", // Updated to "themeColor"
        lighterPurple: "#7A58FF",
      },
      fontSize: {
        xxs: "0.5rem", // Custom font size
      },
      textColor: {
        white: "#FFFFFF",
        "dark-gray": "#7F8183",
        "theme-color": "#6D40FA",
        "lighter-purple": "#7A58FF",
      },
      borderColor: {
        "light-blue": "#3774B6",
        "dark-gray": "#7F8183",
        "theme-color": "#6D40FA", // Added "themeColor" for borderColor
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
});
