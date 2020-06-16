import * as React from "react";

export interface Column {
    key: string;
    name: string;
    width?: number;
    filterable?: boolean;
}

export interface EditorProps<TValue = any, TRow = any> {
    column?: Column;
    value?: TValue | null;
    height?: number;
    rowData?: TRow;
    onCommit?: (e?: any) => void;
    onCommitCancel?: () => void;
    onBlur?: (e?: any) => void;
    onOverrideKeyDown?: (e?: any) => void;
}

export interface EditorState<TValue = any> {
    value?: TValue | null;
}

export interface FormatterProps<TValue = any, TRow = any> {
    value?: TValue | null;
    isScrolling?: boolean;
    row?: TRow;
}

export interface EditorComponent<IN = HTMLElement> extends React.Component {
    getValue: () => any | null;
    getInputNode: () => IN | null;
    disableContainerStyles?: () => boolean;
}

export type PropertyType = "string" | "number" | "boolean" | "date";

export interface PropertyDef {
    propId: string;
    propType: PropertyType;
    propName?: string;
    propReadOnly?: boolean;
}

export interface PropertyCustomEditor {
    propId: string;
    editor: JSX.Element;
}

export interface PropertyCustomFormatter {
    propId: string;
    formatter: JSX.Element;
}