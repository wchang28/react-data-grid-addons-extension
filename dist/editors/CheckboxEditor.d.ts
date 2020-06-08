import React, { KeyboardEvent } from 'react';
import { EditorProps } from "./types";
interface State {
    value?: boolean | null;
}
declare class CheckboxEditor extends React.Component<EditorProps<boolean>, State> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLDivElement | null;
    handleChangeComplete: () => void;
    handleClick: () => void;
    handleKeyPress: (e: KeyboardEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export default CheckboxEditor;
