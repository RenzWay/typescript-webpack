const path = require("path");
const common = require("./webpack.common.js");
const HtmlPlugins = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlPlugins({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),
  ],
});
