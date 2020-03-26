import MessageComponent from "../../components/message";
import React from "react";
import {e18n} from "../../../i18n";

export default () => {
    return (<MessageComponent header={e18n.message_offer_header} uri={"search"} description={e18n.message_offer_description}/>)
}