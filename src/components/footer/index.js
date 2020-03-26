import React from "react";
import "./style.css";

const Footer = () => {
    return (<div className={"myfooter"}>
        <a href={"/impressum"}>Impressum | </a>
        <a href={"/datenschutz"}>Datenschutz | </a>
        <a href={"/message/offer?email=info@videobakers.de"}>Kontakt | </a>
        <a href={"/faq"}>FAQ</a>
    </div>);
};

export default Footer;
