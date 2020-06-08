import React, {RefObject, ChangeEvent} from 'react';
import {EditorProps, WithMinMaxStep} from "./types";

interface State {
    value?: number | null;
}

interface Props extends EditorProps<number>, WithMinMaxStep {
}

class NumericInputEditor extends React.Component<Props, State> {
    private input: RefObject<HTMLInputElement>;
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
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.valueAsNumber });
    }
    render() {
        const value = (this.state.value === null ? undefined : this.state.value);
        return (
            <input type="number" ref={this.input} value={value} min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.handleChange}/>
        );
    }
}

export default NumericInputEditor;