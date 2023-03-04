'use strict';

const path = require('path');
const AppEvents = require(path.join(__dirname, '../events'));
const Joi = require('@hapi/joi'); // Validate payload 

class Service {
    constructor() {
        this.replaceDogsWithCats = this.replaceDogsWithCats.bind(this);
    }

    async replaceDogsWithCats(req, res) {
        try {
            return AppEvents.emit('successWrite', req, res, {result: 'works'});
        }
        catch (error) {
            return AppEvents.emit('error', req, res, { log: error, code: 220 });
        }
    }

}
module.exports = new Service();