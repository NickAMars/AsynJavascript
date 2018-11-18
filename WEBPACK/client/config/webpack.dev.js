const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: "./client/src/main.js"
  },
  mode: "development",
  output:{
    filename: "[name]-boundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  devtool: "sourve-map",
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[{ loader: "babel-loader"}]
      },
      {
        test: /\.css$/,
        use:[
          {loader: "style-loader"},
          {loader: "css-loader" }
        ]
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader",
            options:{
               attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use:[{
          loader: "file-loader",
          options: {
            name: "images/[name]-[hash:8].[ext]"
          }
        }]
      }
    ]
  },
  plugins:[new webpack.HotModuleReplacementPlugin(),
  new HTMLWebpackPlugin({template: "./client/src/index.html"})]
}
