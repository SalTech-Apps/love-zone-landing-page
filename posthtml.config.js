module.exports = {
  plugins: [
    require("posthtml-include")({
      root: "./components",
    }),
  ],
};
