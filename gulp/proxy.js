/*jshint unused:false */
'use strict';

var httpProxy = require('http-proxy');
var chalk = require('chalk');
var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (error, request, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  console.error(chalk.red('[Proxy]'), error);
});

/*
 * The proxy middleware is an Express middleware added to BrowserSync to
 * handle backend request and proxy them to your backend.
 */
function proxyMiddleware(req, res, next) {
  if (req.url.indexOf('/api') === 0) {
    var target = 'http://localhost:3000';
    console.log('(api request)', target + req.url);
    proxy.web(req, res, {target: target});
  } else {
    next();
  }
}

module.exports = [proxyMiddleware];
