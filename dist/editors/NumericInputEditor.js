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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NumericInputEditor = /** @class */ (function (_super) {
    __extends(NumericInputEditor, _super);
    function NumericInputEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            _this.setState({ value: e.target.valueAsNumber });
        };
        _this.input = react_1.default.createRef();
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    NumericInputEditor.prototype.getValue = function () {
        var value = {};
        if (this.props.column) {
            value[this.props.column.key] = this.state.value;
        }
        return value;
    };
    NumericInputEditor.prototype.getInputNode = function () {
        return this.input.current;
    };
    NumericInputEditor.prototype.render = function () {
        var value = (this.state.value === null ? undefined : this.state.value);
        return (react_1.default.createElement("input", { type: "number", ref: this.input, value: value, min: this.props.min, max: this.props.max, step: this.props.step, onChange: this.handleChange }));
    };
    return NumericInputEditor;
}(react_1.default.Component));
exports.default = NumericInputEditor;
//# sourceMappingURL=NumericInputEditor.js.map