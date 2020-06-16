import * as React from "react";
import { PropertyDef, PropertyCustomEditor, EditorProps, EditorComponent } from "../common/types";
interface Props extends EditorProps<any, PropertyDef> {
    customEditors?: PropertyCustomEditor[];
}
export declare class PropertyBasedEditor extends React.Component<Props> {
    private refInternalEditor;
    constructor(props: any);
    get InternalEditor(): EditorComponent<HTMLElement>;
    get ReadOnly(): boolean;
    getValue(): any;
    getInputNode(): HTMLElement | null;
    findCustomEditorByPropId(propId: string | null, customEditors?: PropertyCustomEditor[]): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
