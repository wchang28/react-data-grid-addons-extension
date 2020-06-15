import * as React from 'react';
import {ReactNode} from "react";
import {FormatterProps} from "../common/types";
import {getCheckboxUI} from "../common/utils";

type ReactProps<P = unknown> = Readonly<P> & Readonly<{ children?: ReactNode }>;

export function CheckboxFormatter(props: ReactProps<FormatterProps<boolean>>) {
    const {unicodeChar, fontSize} = getCheckboxUI(props.value);
    return (<span style={{fontSize}}>{unicodeChar}</span>);
};