import React, {useState} from "react"
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";
import FixedLayout from "../../components/layout/fixedlayout";
import Input from "../input";

const PlzWrapper = ({createButton, header, description, uri, orange}) => {

    const [plz, setPLZ] = useState("");

    return (
        <FixedLayout orange={orange} className={"plzpage"} bottom={<Button
            onClick={() => window.location.href = `/results/${uri}?plz=${plz}`}>{createButton}</Button>}>
            <Header>{header}</Header>
            <Text>{description}</Text>
            <Input focus={true} autoFocus={true} onChange={(e) => setPLZ(e.target.value)} placeholder={"PLZ Eingeben"}/>
        </FixedLayout>)
}

export default PlzWrapper;