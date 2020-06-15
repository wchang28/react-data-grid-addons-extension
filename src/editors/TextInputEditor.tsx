import * as React from "react";
import {EditorProps, EditorState} from "../common/types";

export class TextInputEditor extends React.Component<EditorProps<string>, EditorState<string>> {
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
        const value = (this.state.value === null ? undefined : this.state.value);
        return (
            <input type="text" ref={this.input} value={value} onChange={this.handleChange}/>
        );
    }
}