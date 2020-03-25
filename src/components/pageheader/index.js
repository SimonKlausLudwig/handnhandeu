import React from "react";
import "./style.css";

const PageHeader = ({children,color}) => {
    return (<div className={`${color} pagehader`}>
        <a href={"/"}><img src={require('./logo.svg')}/></a>
    </div>);
};

export default PageHeader;
