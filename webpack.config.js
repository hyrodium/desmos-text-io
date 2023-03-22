const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const version = packageJson.version;

module.exports = {
  entry: {
    content: './src/content.js',
    popup: './src/popup.js',
    ace: './node_modules/ace-builds/src-min-noconflict/ace.js',
    json: './node_modules/ace-builds/src-min-noconflict/mode-json.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    // minimize: false
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "manifest.org.json",
          to: "manifest.json",
          transform(content) {
            const manifestJson = JSON.parse(content.toString());
            manifestJson.version = version;
            return JSON.stringify(manifestJson, null, 2);
          },
        },
        { from: "src/popup.html", to: "popup.html" },
        { from: "src/popup.css", to: "popup.css" },
        { from: "src/injected.js", to: "injected.js" },
        { from: "icons", to: "icons" },
      ],
    }),
  ],
};