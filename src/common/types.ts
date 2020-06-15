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