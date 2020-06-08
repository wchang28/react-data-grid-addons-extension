import React, {RefObject, KeyboardEvent} from 'react';
import {EditorProps} from "./types";

interface State {
    value?: boolean | null;
}

class CheckboxEditor extends React.Component<EditorProps<boolean>, State> {
    private input: RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.input = React.createRef();
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
        return this.input.current;;
    }
    handleChangeComplete = () => {
        const value = (this.state.value === undefined || this.state.value === null ? false : this.state.value);
        this.setState({ value: !value });
    }
    handleClick = () => {
        this.handleChangeComplete();
    };
    handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === " ") {
            this.handleChangeComplete();
        }
    };
    render() {
        const backgroundColor = "#eeeeee";
        const char = (this.state.value ? '\u2611' : '\u2610');
        return (
            <div tabIndex={0} ref={this.input} onKeyPress={this.handleKeyPress} style={{position: "relative", backgroundColor}}>
                <span onClick={this.handleClick} style={{fontSize:"1.5em", margin: 0, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor:"pointer"}}>{char}</span>                
            </div>
        );
    }
}

export default CheckboxEditor;