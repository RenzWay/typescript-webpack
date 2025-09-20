const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    hot: true,
    port: 3000,
    headers: {
      "Content-Security-Policy":
        "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:;",
    },
  },
});
