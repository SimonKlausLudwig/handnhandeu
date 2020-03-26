import React from "react"
import PlzWrapper from "../../components/plz";
import {e18n} from "../../../i18n";

export default () => {
    return (<PlzWrapper description={e18n.plz_search_description}
                        createButton={e18n.plz_search_button}
                        header={e18n.plz_search_header}
                        uri={"search"} id={"1c8nic"}/>)
}