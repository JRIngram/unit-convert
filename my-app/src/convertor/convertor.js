"use strict";
exports.__esModule = true;
var _a = require('./anchorConversion'), convertToAnchor = _a.convertToAnchor, convertFromAnchor = _a.convertFromAnchor, getUnitType = _a.getUnitType;
exports.convertMass = function (value, from, to) {
    var fromUnitType = getUnitType(from);
    var toUnitType = getUnitType(to);
    if (!fromUnitType) {
        throw new Error(fromUnitType + " is an invalid unit");
    }
    if (!toUnitType) {
        throw new Error(toUnitType + " is an invalid unit");
    }
    if (fromUnitType !== toUnitType) {
        throw new Error("Unit mismatch");
    }
    var anchorEquivalent = convertToAnchor(value, from);
    var convertedValue = convertFromAnchor(anchorEquivalent, to);
    return convertedValue;
};
exports.convertVolume = function (value, from, to) {
    var fromUnitType = getUnitType(from);
    var toUnitType = getUnitType(to);
    if (!fromUnitType) {
        throw new Error(fromUnitType + " is an invalid unit");
    }
    if (!toUnitType) {
        throw new Error(toUnitType + " is an invalid unit");
    }
    if (fromUnitType !== toUnitType) {
        throw new Error("Unit mismatch");
    }
    var anchorEquivalent = convertToAnchor(value, from);
    var convertedValue = convertFromAnchor(anchorEquivalent, to);
    return convertedValue;
};
//# sourceMappingURL=index.js.map