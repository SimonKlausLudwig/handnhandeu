import React from 'react'
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import FixedLayout from "../components/layout/fixedlayout";
import Text from "../components/text";
import TextArea from "../components/textarea";
import Form from "../components/form";
import {useForm} from "react-hook-form";
import {e18n} from "../../i18n";

export default () => {

    const {register, setValue, handleSubmit, errors} = useForm();

    return (
        <form onSubmit={handleSubmit(({sender, message}) => Form(() =>
            sendMail(sender, message)).then(() => window.location = "/success"))}>
            <FixedLayout className={"messagepage"} bottom={<Button type={"submit"}>Senden</Button>}>
                <Header>{e18n.message_header}</Header>
                <Text>{e18n.message_description}</Text>

                <Input ref={register} id="sender" name="sender" required type={"email"}
                       placeholder={e18n.message_email}/>
                <TextArea ref={register} required={true} id="message" minLength={5} name={"message"}
                          placeholder={e18n.message_content}/>
            </FixedLayout>
        </form>)
}

export function sendMail(sender, content) {
    return fetch(`https://hook.integromat.com/8wmmr1xi3rmnd3dd1so9pevyw7y6y8p7`, {
        method: 'POST',
        body: JSON.stringify({
                content: `<div>${sender} ${e18n.message_mailcontent} ${content}</div>`,
                receiver: new URL(window.location.href).searchParams.get("email")
            },
        ), headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            return response;
        } else {
            throw new Error('Something went wrong');
        }
    })
}

export function sendMessage(data, id) {
    console.log("Sending " + JSON.stringify(data));
    return fetch(`https://hook.integromat.com/klxtymhelp61i0f8b3rwl6tivyssg8u1`, {
        method: 'POST',
        body: JSON.stringify({data: JSON.stringify(data), id: id}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            return response;
        } else {
            throw new Error('Something went wrong');
        }
    })
}