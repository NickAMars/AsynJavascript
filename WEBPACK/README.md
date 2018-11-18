
"webpack"
"html-webpack-plugin"
  module.exports:{
    input:,
    mode: ,
    output:,
    devServer:,
    devtool:,
    module:{
      rules:[{  test: /\.js$/},
            {test: /\.css$/},
            {test: /\.html$/},
            {test: /\.(jpg|gif|png)$/}
      ]
    },
    plugins:[new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({template: "./client/src/index.html"})]
  }
