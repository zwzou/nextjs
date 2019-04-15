var express = require('express');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api')

var server = express();

server.use('/', indexRouter);
server.use('/api', apiRouter);

module.exports = server;