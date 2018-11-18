yarn add express
mkdir src/server
touch src/server/main.js src/server/express.js

yarn add @babel/cli
yarn add @babel/core
yarn add @babel/preset-env
yarn add @babel/register
yarn add @babel/register


//adding middleware to run dist/index.html
so that we can get that html file
const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

yarn add webpack-dev-middleware


devServer: {//options for dev server
  contentBase: "dist",
  overlay: true,
  stats:{
    colors: true
  }
},

use stats :{colors: true} doesnt make a difference for me


yarn add webpack-hot-middleware




/*in src file
@babel/runtime/regenerator and  webpack-hot-middleware/client are for development  */
require("@babel/runtime/regenerator")
require("webpack-hot-middleware/client")
****
* In config/webpack.dev.js for development environment
 "plugins": ["@babel/plugin-transform-runtime"],


***const express     = require("express"),
       path        = require("path"),
       webpack     = require("webpack"),
       config      = require("../config/webpack.dev.js");

 const server      = express();
 const compiler    = webpack(config);
 const webpackDevMiddleware =  require("webpack-dev-middleware")(compiler, config.devServer);
 const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
 //adding middleware to run dist/index.html
 const staticMiddleware = express.static("dist");

 // Connect webpack with express
 server.use(webpackDevMiddleware);
 // use webpack hot after devmiddleware
 server.use(webpackHotMiddleware);
 // uses the index html file in dist
 server.use(staticMiddleware);
