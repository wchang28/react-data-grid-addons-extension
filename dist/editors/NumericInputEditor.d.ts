import * as React from 'react';
import { EditorProps } from "../common/types";
import { WithMinMaxStep } from "./types";
interface State {
    value?: number | null;
}
interface Props extends EditorProps<number>, WithMinMaxStep {
}
export declare class NumericInputEditor extends React.Component<Props, State> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLInputElement | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
