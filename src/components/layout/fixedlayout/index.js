import React, {useEffect} from "react";
import "./style.css";
import PageHeader from "../../pageheader";
import Footer from "../../footer";

const FixedLayout = ({children,  className, bottom, orange}) => {

    useEffect(() => {
        if(orange){
            document.querySelector('html').classList = 'orange';
        }else{
            document.querySelector('html').classList = 'blue';
        }
    });

    return (<div className={`fixedLayout ${className} ${orange?'orangecolor':''}`}>
        <PageHeader/>
        <div className={"fixedContent"}>
            {children}
        </div>
        <div className={"fixedBottom"}>{bottom} <Footer/></div>

    </div>);
};

export default FixedLayout;
