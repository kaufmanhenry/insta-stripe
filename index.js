require('babel-polyfill');
require('dotenv').config();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Setup express
const app = express();
app.set('router', express.Router);
app.set('config', require('./config'));
app.set('StripeProvider', require('./config/stripe'));

// Webpack configuration
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// body-parser config
app.use(bodyParser.json());

// Require the API
require('./backend/index')(app, (err, router) => {
  if (err) console.error(err);

  // Use /api as the base for the backend
  app.use('/api', router);

  // Setup the default index route
  app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/dist/index.html`)));

  app.listen(3000);
  console.info('==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.');
});
