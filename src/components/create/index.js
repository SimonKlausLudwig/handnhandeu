import React from 'react'

import Footer from "../footer";
import {useForm} from "react-hook-form";
import sweetForm from "../form";
import {sendMessage} from "../../pages/message";
import FixedLayout from "../layout/fixedlayout";
import Header from "../header";
import Text from "../text";
import Input from "../input";
import TextArea from "../textarea";
import Button from "../button";

const CreateForm = ({title, orange, id, description, buttonText}) => {

    const {register, setvalueee, handleSubmit, errors} = useForm();

    return (
        <form onSubmit={handleSubmit((formData) => sweetForm((data) => {
                return fetch(`https://api.myjson.com/bins/${id}`).then(d => d.json()).then(s => {
                    return sendMessage(s.concat([formData]), id);
                });
            }
        ).then(() => window.location = "/success"))}>
            <FixedLayout className={"messagepage"} orange={orange} bottom={<Button type={"submit"}>{buttonText}</Button>}>
                <Header>{title}</Header>
                <Text>{description}</Text>
                <Input ref={register} required={true} valueee="Title1" type={"text"} name="name" minLenght={15}
                       placeholder={"Titel"}/>
                <TextArea ref={register} required={true} valueee="Beschreibung" name="description"
                          placeholder={"Beschreibung"}/>
                <Input ref={register} required={true} valueee="simon-ludwig@live.de" name={"email"} minLenght={15}
                       type={"email"} placeholder={"E-Mail-Adresse"}/>
                <Input ref={register} required={true} valueee="81273123" name={"tag"} type={"number"} minLength={5}
                       placeholder={"PLZ"}/>
            </FixedLayout>
        </form>)
}

export default CreateForm;
