// tests.webpack.js

var context = require.context('./client', true, /-test\.jsx?$/);
context.keys().forEach(context);
