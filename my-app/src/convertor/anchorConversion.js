"use strict";
exports.__esModule = true;
var units = require('./units.json');
exports.convertToAnchor = function (value, from) {
    var unitType = getUnitType(from);
    var fromUnit = from in units[unitType] ? units[unitType][from] : null;
    var relativeSplit = fromUnit.ratioWithAnchor.split(' ');
    var toOperation = relativeSplit[0];
    var toDenominator = relativeSplit[1];
    return toOperation === '*' ? value / toDenominator : value * toDenominator;
};
exports.convertFromAnchor = function (value, to) {
    var unitType = getUnitType(to);
    var toUnit = to in units[unitType] ? units[unitType][to] : null;
    var relativeSplit = toUnit.ratioWithAnchor.split(' ');
    var fromOperation = relativeSplit[0];
    var fromDenominator = relativeSplit[1];
    return fromOperation === '*' ? value * fromDenominator : value / fromDenominator;
};
function getUnitType(unit) {
    for (var type in units) {
        if (unit in units[type]) {
            return type;
        }
    }
    return null;
}
exports.getUnitType = getUnitType;
//# sourceMappingURL=anchorConversion.js.map