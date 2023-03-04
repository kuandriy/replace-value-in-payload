"use strict";

const path = require("path");
const AppEvents = require(path.join(__dirname, "../events"));
const Joi = require("@hapi/joi"); // Validate payload if needed

class Service {
	constructor() {
		this.replaceDogsWithCats = this.replaceDogsWithCats.bind(this);
        this.replaceData = this.replaceData.bind(this);
	}

	async replaceDogsWithCats(req, res) {
		const data = { ...req.body };
		try {
			const result = this.replaceData(data);
			return AppEvents.emit("successWrite", req, res, result);
		} catch (error) {
			return AppEvents.emit("error", req, res, { log: error, code: 220 });
		}
	}
	replaceData(data) {
        // Getting object keys as array
		const props = Object.keys(data);
        // loop throught the key
		for (let i = 0; i < props.length; i++) {
			let keyValue = data[props[i]];
            // If value is an object run same function recursively 
			if (
				typeof keyValue === "object" &&
				!Array.isArray(keyValue) &&
				keyValue !== null
			) {
                this.replaceData(keyValue);
			}
			if (
				Array.isArray(keyValue)
			) {
                for(let i=0; i<keyValue.length; i++){
                    if(keyValue[i] === "dog") {
                        keyValue[i] = "cat";
                    }
                }
			}
			if (data[props[i]] === "dog") {
				data[props[i]] = "cat";
			}
		}
		return data;
	}
}
module.exports = new Service();
