import React from "react";
import "./style.css";

const Header = ({children, position,orange,className}) => {
    return (<div className={`myheader ${position} ${className} ${orange ? 'orange' : ''}`}>
        {children}
    </div>);
};

export default Header;
