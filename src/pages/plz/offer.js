import React from "react"
import PlzWrapper from "../../components/plz";
import {e18n} from "../../../i18n";

export default () => {
    return (<PlzWrapper description={e18n.plz_offer_description}
                        createButton={e18n.plz_offer_button}
                        header={e18n.plz_offer_header}
                        uri={"offer"} id={"1c8nic"}/>)
}