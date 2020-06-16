"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyBasedFormatter = void 0;
var React = require("react");
var CheckboxFormatter_1 = require("./CheckboxFormatter");
var SimpleCellFormatter_1 = require("./SimpleCellFormatter");
function findCustomFormatterByPropId(propId, customFormatters) {
    if (customFormatters && customFormatters.length > 0 && propId) {
        for (var _i = 0, customFormatters_1 = customFormatters; _i < customFormatters_1.length; _i++) {
            var cf = customFormatters_1[_i];
            if (cf.propId === propId) {
                return cf.formatter;
            }
        }
    }
    return null;
}
function PropertyBasedFormatter(props) {
    var _a = (props.row ? props.row : { propId: null, propType: null }), propId = _a.propId, propType = _a.propType;
    var internalFormatter = findCustomFormatterByPropId(propId, props.customFormatters);
    var internalFormatterProps = __assign({}, props);
    if (internalFormatterProps.customFormatters) {
        delete internalFormatterProps.customFormatters;
    }
    if (internalFormatter === null) {
        if (propType === "boolean") {
            internalFormatter = React.createElement(CheckboxFormatter_1.CheckboxFormatter, __assign({}, internalFormatterProps));
        }
        else {
            internalFormatter = React.createElement(SimpleCellFormatter_1.SimpleCellFormatter, __assign({}, internalFormatterProps));
        }
    }
    return internalFormatter;
}
exports.PropertyBasedFormatter = PropertyBasedFormatter;
//# sourceMappingURL=PropertyBasedFormatter.js.map