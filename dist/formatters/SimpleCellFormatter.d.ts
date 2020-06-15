import { ReactNode } from "react";
import { FormatterProps } from "../common/types";
declare type ReactProps<P = unknown> = Readonly<P> & Readonly<{
    children?: ReactNode;
}>;
export declare function SimpleCellFormatter(props: ReactProps<FormatterProps<any>>): JSX.Element;
export {};
