const Service = require("../controllers/transformPayload.js");
describe("Test Functionality that replaces 'dog' with a 'cat' ", () => {
	it("Should replace value dog wit value cat", () => {
		expect(Service.replaceData({ test: "dog" })).toEqual({ test: "cat" });
	});
	it("Should not replace word dog in a text", () => {
		expect(Service.replaceData({ test: "I like dog" })).toEqual({
			test: "I like dog"
		});
	});
	it("Should replace value in an array", () => {
		expect(
			Service.replaceData({ test: { pets: ["kenguru", "penguin", "dog"] } })
		).toEqual({ test: { pets: ["kenguru", "penguin", "cat"] } });
	});
	it("Should replace value in nested object", () => {
		expect(
			Service.replaceData({
				nested: {
					category: "pet",
					type: "dog",
					prefer: {
						category: "toy",
						type: "dog"
					}
				}
			})
		).toEqual({
			nested: {
				category: "pet",
				type: "cat",
				prefer: {
					category: "toy",
					type: "cat"
				}
			}
		});
	});
});
