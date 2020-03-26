import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout className={"successpage"} bottom={<Button href={"/"}>{e18n.success_button}</Button>}>
            <div>
                <Header>{e18n.success_message}</Header>
                <Text>{e18n.sucess_message_description}</Text>
            </div>
            <img src={require("./checkmark.svg")}/>
        </FixedLayout>)
}