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
var DateInputEditor = /** @class */ (function (_super) {
    __extends(DateInputEditor, _super);
    function DateInputEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            _this.setState({ value: e.target.value });
        };
        _this.input = react_1.default.createRef();
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    DateInputEditor.prototype.getValue = function () {
        var value = {};
        if (this.props.column) {
            value[this.props.column.key] = this.state.value;
        }
        return value;
    };
    DateInputEditor.prototype.getInputNode = function () {
        return this.input.current;
    };
    DateInputEditor.prototype.render = function () {
        var value = (this.state.value === null ? undefined : (this.state.value ? this.state.value : undefined));
        return (react_1.default.createElement("input", { type: "date", ref: this.input, value: value, min: this.props.min, max: this.props.max, step: this.props.step, onChange: this.handleChange }));
    };
    return DateInputEditor;
}(react_1.default.Component));
exports.default = DateInputEditor;
//# sourceMappingURL=DateInputEditor.js.map