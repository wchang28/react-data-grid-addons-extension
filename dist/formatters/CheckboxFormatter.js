"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxFormatter = void 0;
var React = require("react");
var utils_1 = require("../common/utils");
function CheckboxFormatter(props) {
    var _a = utils_1.getCheckboxUI(props.value), unicodeChar = _a.unicodeChar, fontSize = _a.fontSize;
    return (React.createElement("span", { style: { fontSize: fontSize } }, unicodeChar));
}
exports.CheckboxFormatter = CheckboxFormatter;
;
//# sourceMappingURL=CheckboxFormatter.js.map