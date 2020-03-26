import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import FixedLayout from "../components/layout/fixedlayout";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout bottom={<Button href={"/"}>{e18n.impressum_button}</Button>}>
            <Header>{e18n.impressum_header}</Header>
        </FixedLayout>)
}