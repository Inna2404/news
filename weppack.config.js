const path = require("path");
const HtmlWebpaackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_mpdules/
      }
    ]
  },
  plugins: [
    new HtmlWebpaackPlugin({
      template: "./scr/index.html"
    })
  ]
};
