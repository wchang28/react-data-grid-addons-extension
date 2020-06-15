import * as React from "react";
import { EditorProps, EditorState } from "../common/types";
export declare class TextInputEditor extends React.Component<EditorProps<string>, EditorState<string>> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLInputElement | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
