import * as React from "react"
import { TextField, Checkbox, FormControlLabel, Button, Input } from '@mui/material';
import { useState, ChangeEvent } from "react";
import PhoneNumber from "./phoneNumber";

const ContactForm = () => {

    const [name, setName] = useState('t1')
    const [email, setEmail] = useState('t2')
    // const [phoneNumber, setPhoneNumber] = useState('t3')

    const validatePhoneNumber = (phoneNumber: string) => {
        // if (phoneNumber.length !== 10) 
    }
    const validateEmail = (email: string) => {
        // if (phoneNumber)
    }

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

    const onSubmit = async () => {
        console.log("SUBMIT!")
        console.log("name: ", name)
        console.log("email: ", email)
        console.log("phoneNumber: ", phoneNumber)
        await Promise.all([
            validatePhoneNumber(phoneNumber),
            validateEmail(email)
        ])
    }
    

    return (
        <form>
            <TextField id="name" label='Name' variant="filled" value={name} onInput={onNameChange} />

            <TextField id="email" label='Email' variant="filled" value={email} onInput={onEmailChange} />
            {/* <TextField id="phone" label='Phone' variant="filled" value={phoneNumber} onInput={onPhoneNumberChange} /> */}
            <PhoneNumber />
            <Button id="submit" variant='contained' onClick={onSubmit}>Submit</Button>


            {/* // Name
        // Email
        // Phone
        // Reason Checkbox List
        // Submit */}
        </form>)
}


export default ContactForm
