const path = require('path')

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "/public"),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './public'
  },
}