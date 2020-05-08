import React from 'react';
export default function DisplayUnit(props) {
    return (
        <input type="text" value={props.toValue} readOnly/>
    );
}