import React from "react"
import PlzWrapper from "../../components/plz";

export default () => {
    return (<PlzWrapper description={"Finde die richtigen Angebote in deiner Nähe"}
                        createButton={"Angebote finden"}
                        header={"Angebote finden"}
                        uri={"search"}/>)
}