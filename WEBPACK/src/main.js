/*@babel/runtime/regenerator and  webpack-hot-middleware/client are for development  */
require("@babel/runtime/regenerator")
require("webpack-hot-middleware/client")
require("../style/main.css")
require('./index.html')
// alert("Hello Nicholaus")


const call = (args) => {
  const {a: hell,b: kiss} = args;
  console.log("babel is going to work with .babelrc file", kiss, hell)
}

call({a:"help", b:"Make"});
