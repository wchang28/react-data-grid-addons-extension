import * as React from 'react';
import {ReactNode} from "react";
import {PropertyDef, PropertyCustomFormatter, FormatterProps} from "../common/types";
import {CheckboxFormatter} from "./CheckboxFormatter";
import {SimpleCellFormatter} from "./SimpleCellFormatter";

type ReactProps<P = unknown> = Readonly<P> & Readonly<{ children?: ReactNode }>;

function findCustomFormatterByPropId(propId: string | null, customFormatters?: PropertyCustomFormatter[]) {
    if (customFormatters && customFormatters.length > 0 && propId) {
        for (const cf of customFormatters) {
            if (cf.propId === propId) {
                return cf.formatter;
            }
        }
    }
    return null;
}

interface Props extends FormatterProps<any, PropertyDef> {
    customFormatters?: PropertyCustomFormatter[];
}

export function PropertyBasedFormatter(props: ReactProps<Props>) {
    const {propId, propType} = (props.row ? props.row : {propId: null, propType: null});
    let internalFormatter = findCustomFormatterByPropId(propId, props.customFormatters);
    const internalFormatterProps = {...props};
    if (internalFormatterProps.customFormatters) {
        delete internalFormatterProps.customFormatters;
    }
    if (internalFormatter === null) {
        if (propType === "boolean") {
            internalFormatter = <CheckboxFormatter {...internalFormatterProps}/>
        } else {
            internalFormatter = <SimpleCellFormatter {...internalFormatterProps}/>
        }
    }
    return internalFormatter;
}