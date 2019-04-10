var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api')

var server = express();

server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use('/api', apiRouter);

module.exports = server;