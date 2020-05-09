import React from 'react';
export default function UnitDropdown(props){
    return (
        <select value={props.unit} onChange={props.onChange}>
            <option>g</option>
            <option>mg</option>
            <option>kg</option>
            <option>lb</option>
            <option>st</option>
            <option>m3</option>
            <option>l</option>
            <option>ml</option>
            <option>pt (imp)</option>
            <option>cup (mt)</option>
        </select>
    )
}