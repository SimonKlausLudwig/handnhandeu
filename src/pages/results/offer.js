import React from "react"
import ResultsWrapper from "../../components/resultswrapper";

export default () => {
    return (<ResultsWrapper resultsFound={" Person brauch deine Hilfe"}
                            createButton={"Angebot erstellen"}
                            resultsDescription={"In deiner Nähe brauchen einige Personen deine Hilfe. Alternativ kannst du auch ein eigenes Angebot erstellen"}
                            uri={"offer"} id={"1c8nic"}/>)
}