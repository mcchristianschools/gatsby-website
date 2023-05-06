import * as React from "react"
import { TextField, Button, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useState, ChangeEvent } from "react";
import PhoneNumber from "./phoneNumber";
import handleSubmit from './submit'

const ContactForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sendCheck, setSendCheck] = useState(false)
    const [donateCheck, setDonateCheck] = useState(false)
    const [supportCheck, setSupportCheck] = useState(false)

    const validatePhoneNumber = (phoneNumber: string) => {
        // if (phoneNumber.length !== 10) 
    }
    const validateEmail = (email: string) => {
        // if (phoneNumber)
    }
    const convertReasonsToText = (reasonCheckboxes: any) => {
        let text = ''
        if (reasonCheckboxes.sendCheck) text += 'enroll,'
        if (reasonCheckboxes.donateCheck) text += 'finance,'
        if (reasonCheckboxes.supportCheck) text += 'support'

        return text
    }

    const onFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)
    const onLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)
    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const onSendCheckChange = (event: ChangeEvent<HTMLInputElement>) => setSendCheck(event.target.checked)
    const onDonateCheckChange = (event: ChangeEvent<HTMLInputElement>) => setDonateCheck(event.target.checked)
    const onSupportCheckChange = (event: ChangeEvent<HTMLInputElement>) => setSupportCheck(event.target.checked)


    const onSubmit = async () => {
        // e.preventDefault()
        console.log("SUBMIT!")
        console.log("name: ", firstName, lastName)
        console.log("email: ", email)
        console.log("phoneNumber: ", phoneNumber)

        // console.log("phoneNumber: ", phoneNumber)
        // await Promise.all([
        //     validatePhoneNumber(phoneNumber),
        //     validateEmail(email)
        // ])
        const testThis = await handleSubmit(email, {
            firstName,
            lastName,
            phoneNumber,
            reasons: convertReasonsToText({ sendCheck, donateCheck, supportCheck })
        })
        console.log("testThis: ", testThis)
    }


    return (
        <form>
            <div>
                <TextField id="first-name" label='First Name*' variant="filled" value={firstName} onInput={onFirstNameChange} />
                <TextField id="last-name" label='Last Name*' variant="filled" value={lastName} onInput={onLastNameChange} />
                <TextField id="email" label='Email*' variant="filled" value={email} onInput={onEmailChange} />
            </div>

            <div>
                <Typography>Optional</Typography>
                <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                <FormGroup>
                    <Typography>I want to (check all that apply):</Typography>
                    <FormControlLabel control={<Checkbox checked={sendCheck} onChange={onSendCheckChange} />} label="Send my child(ren) to this school when it opens" />
                    <FormControlLabel control={<Checkbox checked={donateCheck} onChange={onDonateCheckChange} />} label="Donate to the school when donations become available" />
                    <FormControlLabel control={<Checkbox checked={supportCheck} onChange={onSupportCheckChange} />} label="Show my general support for a christian school opening in Madison County" />
                </FormGroup>
            </div>
            <Button id="submit" variant='contained' onClick={onSubmit}>Submit</Button>


            {/* // Name
        // Email
        // Phone
        // Reason Checkbox List
        // Submit */}
        </form>)
}


export default ContactForm
