const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = function () {
  return {
    devtool: "source-map",
    entry: path.resolve(__dirname, "src", "index.js"),
    mode: "development",
    plugins: [new HtmlWebpackPlugin()],
  };
};
