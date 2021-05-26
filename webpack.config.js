module.exports = {
  mode: "production",
  entry: {
    "import-provider": "./src/import-provider.js",
    "only-button": "./src/only-button.js",
    everything: "./src/everything.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
  },
};
