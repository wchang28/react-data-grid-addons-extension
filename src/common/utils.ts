export function getCheckboxUI(value?: boolean | null) {
    return {
        unicodeChar: (value ? '\u2611' : '\u2610')
        ,fontSize: "1.5em"
    };
}