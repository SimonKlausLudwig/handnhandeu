import React from "react";
import "./style.css";

const Input = React.forwardRef((props, ref) => (
    <div className={"myinput"}>
        <input {...props} ref={ref}/>
    </div>
))


export default Input;


