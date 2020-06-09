"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("../common/utils");
exports.default = (function (props) {
    var _a = utils_1.getCheckboxUI(props.value), unicodeChar = _a.unicodeChar, fontSize = _a.fontSize;
    return (react_1.default.createElement("span", { style: { fontSize: fontSize } }, unicodeChar));
});
//# sourceMappingURL=CheckboxFormatter.js.map