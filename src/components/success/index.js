import React from 'react'
import FixedLayout from "../layout/fixedlayout";
import Text from "../text";
import Header from "../header";
import Button from "../button";
import {e18n} from "../../../i18n";


const SuccessComponent = ({header,description,orange}) => {
    return (
        <FixedLayout orange={orange} className={"successpage"} bottom={<Button href={"/"}>{e18n.success_button}</Button>}>
            <div>
                <Header>{header}</Header>
                <Text>{description}</Text>
            </div>
            <img src={require("./checkmark.svg")}/>
        </FixedLayout>)
}

export default SuccessComponent