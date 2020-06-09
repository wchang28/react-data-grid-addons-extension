import * as React from 'react';
import {EditorProps} from "../common/types";
import {getCheckboxUI} from "../common/utils";

interface State {
    value?: boolean | null;
}

export class CheckboxEditor extends React.Component<EditorProps<boolean>, State> {
    private input: React.RefObject<HTMLDivElement>;
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
    handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === " ") {
            this.handleChangeComplete();
        }
    };
    render() {
        const backgroundColor = "#eeeeee";
        const {unicodeChar, fontSize} = getCheckboxUI(this.state.value);
        return (
            <div tabIndex={0} ref={this.input} onKeyPress={this.handleKeyPress} style={{position: "relative", backgroundColor}}>
                <span onClick={this.handleClick} style={{fontSize, margin: 0, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", cursor:"pointer"}}>{unicodeChar}</span>                
            </div>
        );
    }
}