import React from "react";
import "./style.css";
import Footer from "../footer";
import PageHeader from "../pageheader";

const Layout = ({children,color,className}) => {
    return (<div className={`${color} ${className} layout`}>
        <PageHeader/>
        {children}
        <Footer/>
    </div>);
};

export default Layout;
