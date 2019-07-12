var assert = require("assert");
var validator = require("../lib/index.ts");

var validUUID = validator.isUUID("a5764857-ae35-34dc-8f25-a9c9e73aa898");
var invalidUUID = validator.isUUID("a576sd88djdj4857-ae35-34dc-8f25-a9c9e73a");

assert.strictEqual(validUUID, true);
assert.strictEqual(invalidUUID, false);