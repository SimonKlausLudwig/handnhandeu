import React from "react";
import "./style.css";

const Text = ({children,position}) => {
    return (<div className={`mytext ${position}`}>
        {children}
    </div>);
};

export default Text;
