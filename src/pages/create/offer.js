import React from 'react'
import CreateForm from "../../components/create";
import {e18n} from "../../../i18n";

export default () => {
    return (<CreateForm id={"17yrdw"} title={e18n.create_offer_title}
                        buttonText={e18n.create_offer_button}
                        description={e18n.create_offer_description}/>)
}