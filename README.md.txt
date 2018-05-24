This is the installment of the javascript run time environment

we had use the following npm 
npm
webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
babel-core bael-preset-env babel-loader --save-dev
babel-polyfill --save


We use the following scrip tag

"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  }
  

we created the following files

webpack.config.js
.babelrc

