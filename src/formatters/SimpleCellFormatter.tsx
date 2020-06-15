import * as React from 'react';
import {ReactNode} from "react";
import {FormatterProps} from "../common/types";

type ReactProps<P = unknown> = Readonly<P> & Readonly<{ children?: ReactNode }>;

export function SimpleCellFormatter(props: ReactProps<FormatterProps<any>>) {
    const value = (props.value === undefined || props.value === null ? "" : props.value);
    return <span title={String(value)}>{value}</span>;
};