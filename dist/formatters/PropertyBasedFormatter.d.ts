import { ReactNode } from "react";
import { PropertyDef, PropertyCustomFormatter, FormatterProps } from "../common/types";
declare type ReactProps<P = unknown> = Readonly<P> & Readonly<{
    children?: ReactNode;
}>;
interface Props extends FormatterProps<any, PropertyDef> {
    customFormatters?: PropertyCustomFormatter[];
}
export declare function PropertyBasedFormatter(props: ReactProps<Props>): JSX.Element;
export {};
