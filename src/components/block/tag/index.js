import React from "react";
import "./style.css";

const Tag = ({children}) => {
    return (<div className={"mytag"}>
        {children}
    </div>);
};

export default Tag;
