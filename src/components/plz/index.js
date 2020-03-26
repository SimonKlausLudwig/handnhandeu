import React, {useState} from "react"
import Button from "../../components/button";
import Header from "../../components/header";
import Text from "../../components/text";
import FixedLayout from "../../components/layout/fixedlayout";
import Input from "../input";
import {e18n} from "../../../i18n";
import Select from "../select";

const PlzWrapper = ({createButton, header, description, uri, orange}) => {

    const [plz, setPLZ] = useState("");
    const [lokal, setLokal] = useState(true);

    return (
        <FixedLayout orange={orange} className={"plzpage"} bottom={<Button
            onClick={() => window.location.href = `/results/${uri}?plz=${plz}`}>{createButton}</Button>}>
            <Header>{header}</Header>
            <Text>{description}</Text>
            <Select value={lokal} onChange={val => setLokal(val === 1)}/>
            {lokal && <Input focus={true} autoFocus={true} onChange={(e) => setPLZ(e.target.value)} placeholder={e18n.enter_plz}/>}
        </FixedLayout>)
}

export default PlzWrapper;
