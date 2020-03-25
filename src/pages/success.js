import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";

export default () => {
    return (
        <FixedLayout className={"successpage"} bottom={<Button href={"/"}>Zurück zur Startseite</Button>}>
            <div>
                <Header>Nachricht erfolgreich gesendet</Header>
                <Text>Die weitere Kommunikation erfolgt per
                    E-Mail. Danke für dein Engagement!</Text>
            </div>
            <img src={require("./checkmark.svg")}/>
        </FixedLayout>)
}