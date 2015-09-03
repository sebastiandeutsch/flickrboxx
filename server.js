var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var WebpackNotifierPlugin = require('webpack-notifier');
var config = require('./webpack.config');
config.plugins.push(new WebpackNotifierPlugin());

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
