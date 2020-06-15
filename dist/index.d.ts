import * as Editors from "./editors";
import * as Formatters from "./formatters";
import * as React from "react";
export interface EditorComponent<IN = HTMLElement> extends React.Component {
    getValue: () => any | null;
    getInputNode: () => IN | null;
    disableContainerStyles?: () => boolean;
}
export { Editors, Formatters };
export * from "./common/types";
