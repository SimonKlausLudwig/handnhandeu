import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";

export default () => {
    return (
        <FixedLayout bottom={<Button href={"/"}>Zur Startseite</Button>}>
            <Header>Datenschutz</Header>
        </FixedLayout>)
}