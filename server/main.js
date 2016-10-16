const fs = require('fs');
const express = require('express');
const config = require('../config/config.js');
const path = require('path');
const rp = require('request-promise');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');

const app = express();

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
app.use(jsonParser);

if (process.env.NODE_ENV !== 'production') {
  console.log('Loading hot` reloader');
  const webpackcompiler = webpack(webpackconfig);

  // enable webpack middleware for hot-reloads in development
  const useWebpackMiddleware = (expressApp) => {
    expressApp.use(webpackDevMiddleware(webpackcompiler, {
      publicPath: '/',
      stats: {
        colors: true,
        chunks: false, // this reduces the amount of stuff I see in my terminal;
        // configure to your needs
        'errors-only': true,
      },
    }));

    expressApp.use(webpackHotMiddleware(webpackcompiler, {}));

    return expressApp;
  };

  useWebpackMiddleware(app);
}

// main server
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.listen(config.WEB_SERVER_PORT);
console.log(`Server listening on port: ${config.WEB_SERVER_PORT}`);
