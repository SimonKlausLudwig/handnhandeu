import React from "react";
import "./style.css";
import Header from "../header";
import Tag from "./tag";
import Text from "../text";

const Block = ({header, uri, email, description ,tag}) => {
    return (<a href={`/message/${uri}?email=${email}`} className={"myblock"}>
        <Header position={"left"}>{header}</Header>
        <Text position={"left"}>{description}</Text>
        <Tag>{tag?tag:'Deutschlandweit'}</Tag>
    </a>);
};

export default Block;
