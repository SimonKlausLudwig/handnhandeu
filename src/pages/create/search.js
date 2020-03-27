import React from 'react'
import CreateForm from "../../components/create";
import {e18n} from "../../../i18n";

export default () => {
    return (<CreateForm id={"17yrdw"} orange uri={"offer"} title={e18n.create_offer_title}
                        buttonText={e18n.create_offer_button}
                        alertTitle={e18n.create_offer_alert_title}
                        alertDescription={e18n.create_offer_alert_description}
                        description={e18n.create_offer_description}/>)
}