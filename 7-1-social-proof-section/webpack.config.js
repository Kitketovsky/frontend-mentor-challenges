const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/index.html"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader", "sass-loader",
        ],
      },
      { test: /\.(png|svg|jpeg|gif|jpg)$/, type: "asset/resource" },
      { test: /\.html$/, use: ["html-loader"] },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/assets/favicon-32x32.png"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
