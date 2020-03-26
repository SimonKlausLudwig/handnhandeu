import React from "react"
import ResultsWrapper from "../../components/resultswrapper";
import {e18n} from "../../../i18n";

export default () => {
    return (<ResultsWrapper resultsFound={" " + e18n.results_offer_results}
                            createButton={e18n.results_offer_button}
                            resultsDescription={e18n.results_offer_description}
                            uri={"offer"} id={"1c8nic"}/>)
}