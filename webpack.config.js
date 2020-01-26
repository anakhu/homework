const path = require('path');

module.exports = {
  mode: 'development',
  entry: './hometask-7/weather/main.js',
  output: {
    path: path.resolve(__dirname, 'hometask-7/weather/dist'),
    filename: 'bundle.js',
  },
};
