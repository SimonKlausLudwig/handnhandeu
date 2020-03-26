import React, {useState} from 'react'

import Footer from "../footer";
import {useForm} from "react-hook-form";
import sweetForm from "../form";
import FixedLayout from "../layout/fixedlayout";
import Header from "../header";
import Text from "../text";
import Input from "../input";
import TextArea from "../textarea";
import Button from "../button";
import {e18n} from "../../../i18n";
import {sendMessage} from "../message";
import Select from "../select";

const CreateForm = ({title, orange,uri, id, description, buttonText}) => {

    const {register, setvalueee, handleSubmit, errors} = useForm();
    const [lokal, setLokal] = useState(true);
    return (
        <form onSubmit={handleSubmit((formData) => sweetForm((data) => {
                return fetch(`https://api.myjson.com/bins/${id}`).then(d => d.json()).then(s => {
                    return sendMessage(s.concat([formData]), id);
                });
            }
        ).then(() => window.location = `/${uri}/success`))}>
            <FixedLayout className={"messagepage"} orange={orange} bottom={<div>
                <Button type={"submit"}>{buttonText}</Button>
                <Text>Mit Absenden stimmen Sie zu, dass Sie Personen per E-Mail kontaktieren dürfen</Text>
            </div>}>
                <Header>{title}</Header>
                <Text>{description}</Text>
                <Input ref={register} required={true} valueee="Title1" type={"text"} name="name" minLenght={15}
                       placeholder={e18n.form_title}/>
                <TextArea ref={register} required={true} valueee="Beschreibung" name="description"
                          placeholder={e18n.form_description}/>
                <Input ref={register} required={true} valueee="simon-ludwig@live.de" name={"email"} minLenght={15}
                       type={"email"} placeholder={e18n.form_email}/>
                <Select value={lokal} onChange={val => setLokal(val === 1)}/>
                {lokal &&
                <Input ref={register} required={true} valueee="81273123" name={"tag"} type={"number"} minLength={5}
                       placeholder={e18n.form_plz}/>}
            </FixedLayout>
        </form>)
}

export default CreateForm;
