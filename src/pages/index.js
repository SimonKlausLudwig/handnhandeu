import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";

export default () => {
    return (
        <FixedLayout className={"indexPage"} bottom={<Button href={"/onboarding"}>Loslegen</Button>}>
            <img src={require('./../components/pageheader/logo.svg')}/>
            <Header>Wie es funktioniert</Header>
            <Text>Du hast einen lokalen Laden und brauchst Hilfe? Oder du bist digital Native und kannst lokalen Läden helfen? Hand in Hand schaffen wir alles!</Text>
        </FixedLayout>)
}