import React from "react";
import "./style.css";

const Input = React.forwardRef((props, ref) => (
    <div className={"myinput"}>
        <input {...props} ref={ref} type="text"/>
    </div>
))


export default Input;


