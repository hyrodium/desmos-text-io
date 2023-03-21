const path = require('path');

module.exports = {
  entry: {
    content: './src/content.js',
    popup: './src/popup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    minimize: false
  },
};