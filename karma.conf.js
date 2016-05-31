// karma.conf.js

var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Firefox', 'Chrome'],
    frameworks: ['mocha', 'sinon'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['mocha'], // or 'dots'
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
        ],
        externals: {
          'cheerio': 'window',
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true
        }
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
