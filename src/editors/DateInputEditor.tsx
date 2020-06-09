import * as React from 'react';
import {EditorProps} from "../common/types";
import {WithMinMaxStep} from "./types";

interface State {
    value?: string | null;
}

interface Props extends EditorProps<string>, WithMinMaxStep {
}

export class DateInputEditor extends React.Component<Props, State> {
    private input: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.input = React.createRef<HTMLInputElement>();
        this.state = {
            value: this.props.value
        };
    }
    getValue() {
        const value: any = {};
        if (this.props.column) {
            value[this.props.column.key] = this.state.value;
        }
        return value;
    }
    getInputNode() {
        return this.input.current;
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value });
    }
    render() {
        const value = (this.state.value === null ? undefined : (this.state.value ? this.state.value : undefined));
        return (
            <input type="date" ref={this.input} value={value} min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.handleChange}/>
        );
    }
}