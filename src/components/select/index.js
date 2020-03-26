import React from "react";
import "./style.css";

const Select = ({onChange,val}) => {
    return (<select className={"myselect"} value={val} onChange={e => onChange(parseInt(e.target.value))}>
        <option value={1}>Lokal</option>
        <option value={2}>Deutschlandweit</option>
    </select>);
};

export default Select;
