import React, { ChangeEvent } from 'react';
import { EditorProps, WithMinMaxStep } from "./types";
interface State {
    value?: string | null;
}
interface Props extends EditorProps<string>, WithMinMaxStep {
}
declare class DateInputEditor extends React.Component<Props, State> {
    private input;
    constructor(props: any);
    getValue(): any;
    getInputNode(): HTMLInputElement | null;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default DateInputEditor;
