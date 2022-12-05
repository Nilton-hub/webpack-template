const path = require('path'); // CommonJS

module.export = {
  mode: 'development', // production
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        } // use: 'babel-loader'
      }
    ]
  },
  devtool: "source-map"
};
