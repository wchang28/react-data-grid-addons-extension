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
exports.PropertyBasedEditor = void 0;
var React = require("react");
var DateInputEditor_1 = require("./DateInputEditor");
var NumericInputEditor_1 = require("./NumericInputEditor");
var CheckboxEditor_1 = require("./CheckboxEditor");
var TextInputEditor_1 = require("./TextInputEditor");
var ReadOnlyEditor = /** @class */ (function (_super) {
    __extends(ReadOnlyEditor, _super);
    function ReadOnlyEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.input = React.createRef();
        return _this;
    }
    ReadOnlyEditor.prototype.getValue = function () {
        var value = {};
        if (this.props.column) {
            value[this.props.column.key] = this.props.value;
        }
        return value;
    };
    ReadOnlyEditor.prototype.getInputNode = function () {
        return this.input.current;
    };
    ReadOnlyEditor.prototype.render = function () {
        var value = (this.props.value === null || this.props.value === undefined ? undefined : String(this.props.value));
        return (React.createElement("input", { type: "text", ref: this.input, title: "readonly", readOnly: true, value: value }));
    };
    return ReadOnlyEditor;
}(React.Component));
var PropertyBasedEditor = /** @class */ (function (_super) {
    __extends(PropertyBasedEditor, _super);
    function PropertyBasedEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.refInternalEditor = React.createRef();
        return _this;
    }
    Object.defineProperty(PropertyBasedEditor.prototype, "InternalEditor", {
        get: function () {
            return this.refInternalEditor.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PropertyBasedEditor.prototype, "ReadOnly", {
        get: function () {
            return (this.props.rowData && typeof this.props.rowData.propReadOnly === "boolean" ? this.props.rowData.propReadOnly : false);
        },
        enumerable: false,
        configurable: true
    });
    PropertyBasedEditor.prototype.getValue = function () {
        return this.InternalEditor.getValue();
    };
    PropertyBasedEditor.prototype.getInputNode = function () {
        return this.InternalEditor.getInputNode();
    };
    PropertyBasedEditor.prototype.findCustomEditorByPropId = function (propId, customEditors) {
        if (customEditors && customEditors.length > 0 && propId) {
            for (var _i = 0, customEditors_1 = customEditors; _i < customEditors_1.length; _i++) {
                var ce = customEditors_1[_i];
                if (ce.propId === propId) {
                    return ce.editor;
                }
            }
        }
        return null;
    };
    PropertyBasedEditor.prototype.render = function () {
        var _a = (this.props.rowData ? this.props.rowData : { propId: null, propType: null }), propId = _a.propId, propType = _a.propType;
        var readOnly = this.ReadOnly;
        var internalEditor = (readOnly ? React.createElement(ReadOnlyEditor, null) : this.findCustomEditorByPropId(propId, this.props.customEditors));
        var internalEditorProps = __assign({ ref: this.refInternalEditor }, this.props);
        if (internalEditorProps.customEditors) {
            delete internalEditorProps.customEditors;
        }
        if (internalEditor === null) {
            if (propType === "string") {
                internalEditor = React.createElement(TextInputEditor_1.TextInputEditor, __assign({}, internalEditorProps));
            }
            else if (propType === "boolean") {
                internalEditor = React.createElement(CheckboxEditor_1.CheckboxEditor, __assign({}, internalEditorProps));
            }
            else if (propType === "number") {
                internalEditor = React.createElement(NumericInputEditor_1.NumericInputEditor, __assign({}, internalEditorProps));
            }
            else if (propType === "date") {
                internalEditor = React.createElement(DateInputEditor_1.DateInputEditor, __assign({}, internalEditorProps));
            }
        }
        else {
            internalEditor = React.cloneElement(internalEditor, internalEditorProps);
        }
        return internalEditor;
    };
    return PropertyBasedEditor;
}(React.Component));
exports.PropertyBasedEditor = PropertyBasedEditor;
//# sourceMappingURL=PropertyBasedEditor.js.map