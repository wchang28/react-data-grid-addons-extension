import React from 'react';

export default (props: {value: boolean}) => {
    const char = (props.value ? '\u2611' : '\u2610');
    return <span style={{fontSize:"1.5em"}}>{char}</span>;
};