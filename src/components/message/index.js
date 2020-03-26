import React from 'react'
import {useForm} from "react-hook-form";
import FixedLayout from "../layout/fixedlayout";
import Header from "../header";
import Text from "../text";
import Input from "../input";
import TextArea from "../textarea";
import {e18n} from "../../../i18n";
import sweetForm from "../form";
import Button from "../button";

const MessageComponent = ({uri, alertTitle, alertDescription, description, orange, header}) => {

    const {register, setValue, handleSubmit, errors} = useForm();

    return (
        <form onSubmit={handleSubmit(({sender, message}) => sweetForm(() =>
            sendMail(sender, message), alertTitle, alertDescription).then(() => window.location = `/share`))}>
            <FixedLayout orange={orange} className={"messagepage"} bottom={<Button type={"submit"}>Senden</Button>}>
                <Header>{header}</Header>
                <Text>{description}</Text>

                <Input ref={register} id="sender" name="sender" required type={"email"}
                       placeholder={e18n.message_email}/>
                <TextArea ref={register} required={true} id="message" minLength={5} name={"message"}
                          placeholder={e18n.message_content}/>
            </FixedLayout>
        </form>)
}

export default MessageComponent;

export function sendMail(sender, content) {
    return fetch(`https://hook.integromat.com/dqawpkdpq1a4pq67r426e8akya0967uj`, {
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
