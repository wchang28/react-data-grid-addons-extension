"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputEditor = void 0;
var React = require("react");
var TextInputEditor = /** @class */ (function (_super) {
    __extends(TextInputEditor, _super);
    function TextInputEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            _this.setState({ value: e.target.value });
        };
        _this.input = React.createRef();
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    TextInputEditor.prototype.getValue = function () {
        var value = {};
        if (this.props.column) {
            value[this.props.column.key] = this.state.value;
        }
        return value;
    };
    TextInputEditor.prototype.getInputNode = function () {
        return this.input.current;
    };
    TextInputEditor.prototype.render = function () {
        var value = (this.state.value === null ? undefined : this.state.value);
        return (React.createElement("input", { type: "text", ref: this.input, value: value, onChange: this.handleChange }));
    };
    return TextInputEditor;
}(React.Component));
exports.TextInputEditor = TextInputEditor;
//# sourceMappingURL=TextInputEditor.js.map