import React from "react";
import "./style.css";

const Button = (props) => {
    var TagName = props.type === 'submit'?'button':'div';
    return (<button {...props}
                 onClick={() => props.href ? window.location = props.href : (props.onClick && props.onClick())}
                 className={`mybutton ${!!props.orange ? 'orange' : ''}`}>
        {props.children}
    </button>);
};

export default Button;
