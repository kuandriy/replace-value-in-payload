'use strict'
const host = process.env.host || '127.0.0.1';
const port = process.env.port || 8080;
const server = require('./server.js');

server.listen(port, host, () => {
    console.log(`Server started ${host} ${port}`);
});