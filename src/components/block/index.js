import React from "react";
import "./style.css";
import Header from "../header";
import Tag from "./tag";
import Text from "../text";

const Block = ({header, email, description ,tag}) => {
    return (<a href={`/message?email=${email}`} className={"myblock"}>
        <Header position={"left"}>{header}</Header>
        <Text position={"left"}>{description}</Text>
        <Tag>{tag}</Tag>
    </a>);
};

export default Block;
