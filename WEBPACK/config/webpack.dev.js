const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output:{
    filename: "[name]-boundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {//options for dev server
    contentBase: "dist",
    overlay: true
  },
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
      {// for html
        test: /\.html$/,
        use:[
          {
            loader: "file-loader",
            options: { name: "[name].html"}
          },
          { loader: "extract-loader" },
          {
            loader: "html-loader",
            options:{
               attrs: ["img:src"]
            }
          }
        ]
      },
      {// for image files
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
  plugins:[new webpack.HotModuleReplacementPlugin()]
}

// { // what ever the name of the html loader put that here
//   loader: "file-loader",
//   options:{ name: "[name].html" }// takes html firle name
// },
// { // tells webpack that you want this to be a seperate file
//   loader: "extract-loader"
// },
// {// does the linting
//   loader: "html-loader"
// }
