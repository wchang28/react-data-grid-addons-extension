import React from 'react';
import {FormatterProps} from "../common/types";
import {getCheckboxUI} from "../common/utils";

export default (props: FormatterProps<boolean>) => {
    const {unicodeChar, fontSize} = getCheckboxUI(props.value);
    return (<span style={{fontSize}}>{unicodeChar}</span>);
};