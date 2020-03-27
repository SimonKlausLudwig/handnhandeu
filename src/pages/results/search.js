import React from "react"
import ResultsWrapper from "../../components/resultswrapper";
import {e18n} from "../../../i18n";

export default () => {
    return (<ResultsWrapper orange notFound={e18n.results_search_notfound}
                            resultsFound={" " + e18n.results_search_results}
                            createButton={e18n.results_search_button}
                            resultsDescription={e18n.results_search_description} uri={"search"}
                            id={"1c8nic"}/>)
}