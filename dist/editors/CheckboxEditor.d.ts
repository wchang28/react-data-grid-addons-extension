import * as React from 'react';
import { EditorProps } from "../common/types";
interface State {
    value?: boolean | null;
}
export declare class CheckboxEditor extends React.Component<EditorProps<boolean>, State> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLDivElement | null;
    handleChangeComplete: () => void;
    handleClick: () => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export {};
