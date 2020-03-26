import React from 'react'
import { Link } from 'gatsby'
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Layout from "../components/layout";
import FixedLayout from "../components/layout/fixedlayout";
import TextArea from "../components/textarea";
import Text from "../components/text";
import {e18n} from "../../i18n";

export default () => {
    return (
        <FixedLayout className={"onboardingpage"}>
            <div>
                <Header orange>{e18n.onboard_owner}</Header>
                <Text>{e18n.onboard_owner_description}</Text>
                <Button orange href={"/plz/search"}>{e18n.onboard_owner_button}</Button>
            </div>

            <div>
                <Header>{e18n.onboard_helper}</Header>
                <Text>{e18n.onboard_helper_description}</Text>
                <Button href={"/plz/offer"}>{e18n.onboard_helper_button}</Button>
            </div>
        </FixedLayout>)
}