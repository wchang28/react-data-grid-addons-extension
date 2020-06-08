export interface Column {
    key: string;
    name: string;
    width?: number;
    filterable?: boolean;
}

export interface EditorProps<VT = any> {
    column?: Column;
    value?: VT | null;
    height?: number;
    rowData?: any;
    onCommit?: (e?: any) => void;
    onCommitCancel?: () => void;
    onBlur?: (e?: any) => void;
    onOverrideKeyDown?: (e?: any) => void;
}

export interface WithMinMaxStep {
    min?: string | number;
    max?: string | number;
    step?: string | number;   
}