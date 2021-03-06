import * as React from "react";
import {PropertyDef, PropertyCustomEditor, EditorProps, EditorComponent} from "../common/types";
import {DateInputEditor} from "./DateInputEditor";
import {NumericInputEditor} from "./NumericInputEditor";
import {CheckboxEditor} from "./CheckboxEditor";
import {TextInputEditor} from "./TextInputEditor";

class ReadOnlyEditor extends React.Component<EditorProps<any>> {
    private input: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.input = React.createRef<HTMLInputElement>();
    }
    getValue() {
        const value: any = {};
        if (this.props.column) {
            value[this.props.column.key] = this.props.value;
        }
        return value;
    }
    getInputNode() {
        return this.input.current;
    }
    render() {
        const value = (this.props.value === null || this.props.value === undefined ? undefined : String(this.props.value));
        return (
            <input type="text" ref={this.input} title={"readonly"} readOnly={true} value={value}/>
        );
    }
}

interface Props extends EditorProps<any, PropertyDef> {
    customEditors?: PropertyCustomEditor[];
}

export class PropertyBasedEditor extends React.Component<Props> {
    private refInternalEditor: React.RefObject<HTMLElement>;
    constructor(props: any) {
        super(props);
        this.refInternalEditor = React.createRef<HTMLElement>();
    }
    get InternalEditor() {
        return (this.refInternalEditor.current as any) as EditorComponent;
    }
    get ReadOnly() {
        return (this.props.rowData && typeof this.props.rowData.propReadOnly === "boolean" ? this.props.rowData.propReadOnly : false);
    }
    getValue() {
        return this.InternalEditor.getValue();
    }
    getInputNode() {
        return this.InternalEditor.getInputNode();
    }
    findCustomEditorByPropId(propId: string | null, customEditors?: PropertyCustomEditor[]) {
        if (customEditors && customEditors.length > 0 && propId) {
            for (const ce of customEditors) {
                if (ce.propId === propId) {
                    return ce.editor;
                }
            }
        }
        return null;
    }
    render() {
        const {propId, propType} = (this.props.rowData ? this.props.rowData : {propId: null, propType: null});
        const readOnly = this.ReadOnly;
        let internalEditor = (readOnly ? <ReadOnlyEditor/> : this.findCustomEditorByPropId(propId, this.props.customEditors));
        const internalEditorProps = {...{ref: this.refInternalEditor as any}, ...this.props};
        if (internalEditorProps.customEditors) {
            delete internalEditorProps.customEditors;
        }
        if (internalEditor === null) {
            if (propType === "string") {
                internalEditor = <TextInputEditor {...internalEditorProps}/>
            } else if (propType === "boolean") {
                internalEditor = <CheckboxEditor {...internalEditorProps}/>
            } else if (propType === "number") {
                internalEditor = <NumericInputEditor {...internalEditorProps}/>
            } else if (propType === "date") {
                internalEditor = <DateInputEditor {...internalEditorProps}/>
            }
        } else {
            internalEditor = React.cloneElement(internalEditor, internalEditorProps);
        }
        return internalEditor;
    }
}