import React from 'react'
import {Link} from 'gatsby'
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
        <FixedLayout className={"onboardingpage"} bottom={<div>
            <Button orange href={"https://www.instagram.com/handinhand_eu/"}>Intstagram</Button>
            <Button orange href={"https://www.facebook.com/HandnHand-101757878145534/"}>Facebook</Button>
        </div>}>
            <Header orange>{e18n.share_header}</Header>
            <Text>{e18n.share_text}</Text>
        </FixedLayout>)
}