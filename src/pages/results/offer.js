import React from "react"
import ResultsWrapper from "../../components/resultswrapper";
import {e18n} from "../../../i18n";

export default () => {
    return (<ResultsWrapper resultsFound={" " + e18n.results_offer_results}
                            createButton={e18n.results_offer_button}
                            notFound={e18n.results_offer_notfound}
                            resultsDescription={e18n.results_offer_description}
                            uri={"offer"} id={"17yrdw"}/>)
}