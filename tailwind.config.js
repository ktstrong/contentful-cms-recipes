// tailwind.config.js

module.exports = {
  purge: false,
  theme: {
    colors: {
      footGray:"#1c1c1c",
      white: "#FFFFFF",
      black: "#000",
      transparent: "transparent",
      yellow: "#f0ff00",
      pink: "#fe019a",
      darkPink : "#d11d53"
    },
  },
  variants: {
    borderColor: ["hover", "focus"],
  },
  plugins: [],
};