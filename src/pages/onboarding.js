import React from 'react'
import { Link } from 'gatsby'
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Layout from "../components/layout";
import FixedLayout from "../components/layout/fixedlayout";
import TextArea from "../components/textarea";
import Text from "../components/text";

export default () => {
    return (
        <FixedLayout className={"onboardingpage"}>
            <div>
                <Header orange>Ladenbesitzer</Header>
                <Text>Du hast einen Laden und brauchst digitale Unterstützung? Du brauchst einen Online-Shop oder eine Möglichkeit deine Speisen als Lieferdienst anzubieten? Wir helfen dir!</Text>
                <Button orange href={"/plz/search"}>Ich brauche Hilfe</Button>
            </div>

            <div>
                <Header>Digital Native</Header>
                <Text>Du hast Erfahrung im Aufbauen von Online-Shops oder anderen digitialen Plattformen und bist bereit lokalen Händlern unter die Arme zu greifen? Hier geht’s lang!</Text>
                <Button href={"/plz/offer"}>Ich biete Hilfe</Button>
            </div>
        </FixedLayout>)
}