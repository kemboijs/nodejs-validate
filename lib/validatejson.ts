var validator = require("validator");

function validateJson(json) {
    var validJson = validator.isJSON(json);
    return validJson;
}

exports = module.exports = validateJson;