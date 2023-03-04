'use strict'
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');
require(path.join(__dirname, '/bootscripts/env.js'))();

server.use(
  bodyParser.json({limit: '10mb', extended: true}), 
);

const routers = require('./routers');
routers(server);

module.exports = server;
