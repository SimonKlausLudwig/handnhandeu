import React, {useEffect} from "react";
import "./style.css";
import PageHeader from "../../pageheader";
import Footer from "../../footer";
import Div100vh from 'react-div-100vh'

const FixedLayout = ({children,  className, bottom, orange}) => {

    useEffect(() => {
        if(orange){
            document.querySelector('html').classList = 'orange';
        }else{
            document.querySelector('html').classList = 'blue';
        }
    });

    return (<Div100vh className={`fixedLayout ${className} ${orange?'orangecolor':''}`}>
        <PageHeader/>
        <div className={"fixedContent"}>
            {children}
        </div>
        <div className={"fixedBottom"}>{bottom} <Footer/></div>

    </Div100vh>);
};

export default FixedLayout;
