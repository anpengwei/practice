var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin-webpack4");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: "vue-loader" },
          { loader: "iview-loader", options: { prefix: false } },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "vue-style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=1024",
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader",
      },
    ],
  },
  mode: "development",
  devServer: {
    host: "127.0.0.1",
    port: "8000",
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve("src"),
      _views: path.resolve("src/views"),
      _style: path.resolve("src/assets/style"),
      _style: path.resolve("src/assets/style"),
      _image: path.resolve("src/assets/image"),
    },
  },
};
