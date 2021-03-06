import { ReactNode } from "react";
import { FormatterProps } from "../common/types";
declare type ReactProps<P = unknown> = Readonly<P> & Readonly<{
    children?: ReactNode;
}>;
export declare function CheckboxFormatter(props: ReactProps<FormatterProps<boolean>>): JSX.Element;
export {};
