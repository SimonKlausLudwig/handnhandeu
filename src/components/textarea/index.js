import React from "react";
import "./style.css";

const TextArea = React.forwardRef((props, ref) => (
    <div className={"mytextarea"}>
        <textarea ref={ref} {...props}/>
    </div>
));

export default TextArea;



