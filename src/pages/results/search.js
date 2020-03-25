import React from "react"
import ResultsWrapper from "../../components/resultswrapper";

export default () => {
    return (<ResultsWrapper orange notFound={"Nicht gefunden nach was du suchst ?"}
                            resultsFound={" Personen bieten dir ihre Hilfe an"}
                            createButton={"Angebot erstellen"}
                            resultsDescription={"Heute ist dein Glückstag. Viele Personen bieten Ihre Hilfe an"} uri={"search"}
                            id={"17yrdw"}/>)
}