const path = require('path');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode:'development',
  entry: './src/index.ts',
  devtool:false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback:{
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      events: require.resolve('events'),
      string_decoder: require.resolve('string_decoder'),
      sys: require.resolve('util'),
      url: require.resolve('url'),
      util: require.resolve('util'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new GasPlugin()
  ]
};