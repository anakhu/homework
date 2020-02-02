const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['webpack/hot/dev-server', './hometask-7/weather/main.js'],
  output: {
    path: path.resolve(__dirname, 'hometask-7/weather/dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './hometask-7/weather',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }],
  },
};
