"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCellFormatter = void 0;
var React = require("react");
function SimpleCellFormatter(props) {
    var value = (props.value === undefined || props.value === null ? "" : props.value);
    return React.createElement("span", { title: String(value) }, value);
}
exports.SimpleCellFormatter = SimpleCellFormatter;
;
//# sourceMappingURL=SimpleCellFormatter.js.map