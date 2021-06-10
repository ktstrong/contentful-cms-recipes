// tailwind.config.js

module.exports = {
  purge: false,
  theme: {
    colors: {
      gray:"#aaaaaa",
      footGray:"#1c1c1c",
      white: "#FFFFFF",
      black: "#000",
      transparent: "transparent",
      yellow: "#f0ff00",
      pink: "#fe019a",
      red: "#f73718",
      darkPink : "#d11d53",
      offwhite: "#dce1e3",
    },
  },
  variants: {
    borderColor: ["hover", "focus"],
  },
  plugins: [],
};