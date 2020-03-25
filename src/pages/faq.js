import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";

export default () => {
    return (
        <FixedLayout className={"faqpage"} bottom={<Button href={"/"}>Zur Startseite</Button>}>
            <Header>Häufige Fragen</Header>

            <div>
                <Header position={"left"}>Wie geht das ?</Header>
                <Text position={"left"}>Du hast einen Laden und brauchst digitale Unterstützung? Du brauchst einen Online-Shop oder eine Möglichkeit deine Speisen als Lieferdienst anzubieten? Wir helfen dir!</Text>
            </div>

            <div>
                <Header position={"left"}>Wie geht das ?</Header>
                <Text position={"left"}>Du hast einen Laden und brauchst digitale Unterstützung? Du brauchst einen Online-Shop oder eine Möglichkeit deine Speisen als Lieferdienst anzubieten? Wir helfen dir!</Text>
            </div>

            <div>
                <Header position={"left"}>Wie geht das ?</Header>
                <Text position={"left"}>Du hast einen Laden und brauchst digitale Unterstützung? Du brauchst einen Online-Shop oder eine Möglichkeit deine Speisen als Lieferdienst anzubieten? Wir helfen dir!</Text>
            </div>

            <div>
                <Header position={"left"}>Wie geht das ?</Header>
                <Text position={"left"}>Du hast einen Laden und brauchst digitale Unterstützung? Du brauchst einen Online-Shop oder eine Möglichkeit deine Speisen als Lieferdienst anzubieten? Wir helfen dir!</Text>
            </div>


        </FixedLayout>)
}