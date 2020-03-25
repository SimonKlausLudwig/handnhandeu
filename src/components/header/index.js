import React from "react";
import "./style.css";

const Header = ({children, position,orange}) => {
    return (<div className={`myheader ${position} ${orange ? 'orange' : ''}`}>
        {children}
    </div>);
};

export default Header;
