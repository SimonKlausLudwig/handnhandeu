import React from 'react'
import CreateForm from "../../components/create";
import {e18n} from "../../../i18n";

export default () => {
    return (<CreateForm orange uri="search" id="1c8nic" title={e18n.create_search_title}
                        buttonText={e18n.create_search_button}
                        description={e18n.create_search_description}/>)
}