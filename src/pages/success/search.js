import React from "react"
import {e18n} from "../../../i18n";
import SuccessComponent from "../../components/success";

export default () => {
    return (<SuccessComponent description={e18n.success_offer_description}
                              header={e18n.success_offer_header}
                              uri={"search"} id={"1c8nic"}/>)
}