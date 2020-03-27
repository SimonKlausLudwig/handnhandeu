import React from "react";
import "./style.css";
import Header from "../header";
import Text from "../text";

const LandingBlock = ({children,icon, color, bigheader, header, text}) => {
    return (<div className={`landingblock color_${color}`}>
        {bigheader && <Header className={"bigheader"}>{bigheader}</Header>}
        {header && <Header>{header}</Header>}

        {icon && <div className={"landingimagewrapper"}>
             <img src={icon}/>
        </div>}

        {text && <Text>{text}</Text>}
        <div className={"landingchildrens"}>
            {children}
        </div>
    </div>);
};

export default LandingBlock;
