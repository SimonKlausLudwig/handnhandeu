import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout className={"faqpage"} bottom={<Button href={"/"}>Zur Startseite</Button>}>
            <Header>Häufige Fragen</Header>


            {e18n.faq.map(r => {
                return <div>
                    <Header position={"left"}>{r.title}</Header>
                    <Text position={"left"}>{r.description}</Text>
                </div>
            })}

        </FixedLayout>)
}