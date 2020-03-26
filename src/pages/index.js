import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout className={"indexPage"} bottom={<Button href={"/onboarding"}>Loslegen</Button>}>
            <img src={require('./../components/pageheader/logo.svg')}/>
            <Header>{e18n.index_header}</Header>
            <Text>{e18n.index_description}</Text>
        </FixedLayout>)
}