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
var utils_1 = require("../common/utils");
var CheckboxEditor = /** @class */ (function (_super) {
    __extends(CheckboxEditor, _super);
    function CheckboxEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeComplete = function () {
            var value = (_this.state.value === undefined || _this.state.value === null ? false : _this.state.value);
            _this.setState({ value: !value });
        };
        _this.handleClick = function () {
            _this.handleChangeComplete();
        };
        _this.handleKeyPress = function (e) {
            if (e.key === " ") {
                _this.handleChangeComplete();
            }
        };
        _this.input = react_1.default.createRef();
        _this.state = {
            value: _this.props.value
        };
        return _this;
    }
    CheckboxEditor.prototype.getValue = function () {
        var value = {};
        if (this.props.column) {
            value[this.props.column.key] = this.state.value;
        }
        return value;
    };
    CheckboxEditor.prototype.getInputNode = function () {
        return this.input.current;
        ;
    };
    CheckboxEditor.prototype.render = function () {
        var backgroundColor = "#eeeeee";
        var _a = utils_1.getCheckboxUI(this.state.value), unicodeChar = _a.unicodeChar, fontSize = _a.fontSize;
        return (react_1.default.createElement("div", { tabIndex: 0, ref: this.input, onKeyPress: this.handleKeyPress, style: { position: "relative", backgroundColor: backgroundColor } },
            react_1.default.createElement("span", { onClick: this.handleClick, style: { fontSize: fontSize, margin: 0, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor: "pointer" } }, unicodeChar)));
    };
    return CheckboxEditor;
}(react_1.default.Component));
exports.default = CheckboxEditor;
//# sourceMappingURL=CheckboxEditor.js.map