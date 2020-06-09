import * as React from 'react';
import { EditorProps } from "../common/types";
import { WithMinMaxStep } from "./types";
interface State {
    value?: string | null;
}
interface Props extends EditorProps<string>, WithMinMaxStep {
}
export declare class DateInputEditor extends React.Component<Props, State> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLInputElement | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
