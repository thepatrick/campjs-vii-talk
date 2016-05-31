// karma.conf.js

const path = require('path');
const webpack = require('webpack');

let browsers = ['Firefox', 'Chrome'];

if (process.env.BROWSER && process.env.BVER) {
  const browser = process.env.BROWSER;
  browsers = [browser[0].toUpperCase() + browser.substr(1)];
  process.env[`${browser.toUpperCase()}_BIN`] = path.join(__dirname, 'node_modules', '.bin', `start-${browser}`);
}

module.exports = function (config) {
  config.set({
    browsers,
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
