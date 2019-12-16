const path = require('path');

module.exports = {
  mode: 'development',
  entry: './notes/index.js',
  output: {
    path: path.resolve(__dirname, 'notes/dist'),
    filename: 'bundle.js',
  },
};
