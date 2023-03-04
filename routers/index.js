// Routers definition
'use strict'
const path = require('path');
const ReplaceController = require(path.join(__dirname, '../controllers/transformPayload.js'));

module.exports = function (server) {
    server.route('/replace').post(ReplaceController.replaceDogsWithCats);
};