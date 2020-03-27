import React from "react"
import {e18n} from "../../../i18n";
import SuccessComponent from "../../components/success";

export default () => {
    return (<SuccessComponent description={e18n.success_search_description} orange
                              header={e18n.success_search_header} uri={"search"}/>)
}