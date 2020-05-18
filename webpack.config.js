const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    mode: "production",
    entry: {
      'AiurCore.js': [
        path.resolve(__dirname, 'js/AiurCore.js'),
      ]
    },
    output: {
      filename: 'AiurCore.min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'window',
      libraryExport: 'default'
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({})
      ]
    }
  },
  {
    mode: "production",
    entry: {
      'AiurDashboard.js': [
        path.resolve(__dirname, 'js/AiurDashboard.js'),
      ]
    },
    output: {
      filename: 'AiurDashboard.min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'window'
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({})
      ]
    }
  }
];