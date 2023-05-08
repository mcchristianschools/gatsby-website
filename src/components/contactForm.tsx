import * as React from "react"
import { TextField, Button, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useState, ChangeEvent } from "react";
import PhoneNumber from "./phoneNumber";
import handleSubmit from './submit'
import clsx from "clsx";

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameHelperText, setFirstNameHelperText] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameHelperText, setLastNameHelperText] = useState('')
    const [email, setEmail] = useState('')
    const [emailHelperText, setEmailHelperText] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [sendCheck, setSendCheck] = useState(false)
    const [donateCheck, setDonateCheck] = useState(false)
    const [supportCheck, setSupportCheck] = useState(false)
    const [workCheck, setWorkCheck] = useState(false)
    const [formDetails, setFormDetails] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(false)

    const convertReasonsToText = (reasonCheckboxes: any) => {
        let text = ''
        if (reasonCheckboxes.sendCheck) text += 'enroll,'
        if (reasonCheckboxes.donateCheck) text += 'finance,'
        if (reasonCheckboxes.supportCheck) text += 'support,'
        if (reasonCheckboxes.workCheck) text += 'support'

        // Trim possible ending comma
        return text.substring(text.length - 1) === ',' ? text.substring(0, text.length - 1) : text
    }

    const onFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstNameHelperText('')
        setFirstName(event.target.value)
    }
    const onLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastNameHelperText('')
        setLastName(event.target.value)
    }
    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailHelperText('')
        setEmail(event.target.value)
    }
    const onSendCheckChange = (event: ChangeEvent<HTMLInputElement>) => setSendCheck(event.target.checked)
    const onDonateCheckChange = (event: ChangeEvent<HTMLInputElement>) => setDonateCheck(event.target.checked)
    const onSupportCheckChange = (event: ChangeEvent<HTMLInputElement>) => setSupportCheck(event.target.checked)
    const onWorkCheckChange = (event: ChangeEvent<HTMLInputElement>) => setWorkCheck(event.target.checked)


    const onSubmit = async () => {

        // Validate Fields
        let requiredError = false
        if (firstName === '') {
            requiredError = true
            setFirstNameHelperText('First Name is requied')
        }
        if (lastName === '') {
            requiredError = true
            setLastNameHelperText('Last Name is requied')
        }
        if (email === '') {
            requiredError = true
            setEmailHelperText('Email is requied')
        }

        if (requiredError) return

        setFormDetails('')

        // Submit to mailchimp
        try {
            setSubmitDisabled(true)
            const submitResponse = await handleSubmit(email, {
                // firstName,
                lastName,
                phoneNumber,
                reasons: convertReasonsToText({ sendCheck, donateCheck, supportCheck, workCheck })
            })
            console.log("submitResponse: ", submitResponse)
            if (submitResponse.result === 'error') {
                setFormDetails(`Error submitting form: ${submitResponse.msg}`)
            } else {
                setFormDetails(`${submitResponse.msg} You should recieve a welcome email from us shortly.`)
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhoneNumber('')
                setSendCheck(false)
                setDonateCheck(false)
                setSupportCheck(false)
                setWorkCheck(false)
            }
        } catch (err: any) {
            setFormDetails(`Error submitting form: ${err.message}`)
        }
        setSubmitDisabled(false)
    }

    return (
        <><form>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <TextField id="first-name" label='First Name*' variant="filled" value={firstName} helperText={firstNameHelperText} error={firstNameHelperText !== ''} onInput={onFirstNameChange} />
                <TextField id="last-name" label='Last Name*' variant="filled" value={lastName} helperText={lastNameHelperText} error={lastNameHelperText !== ''} onInput={onLastNameChange} />
                <TextField id="email" label='Email*' variant="filled" value={email} helperText={emailHelperText} error={emailHelperText !== ''} onInput={onEmailChange} />
            </div>

            <div style={{
                marginTop: '20px'
            }}>
                <Typography variant='subtitle1' style={{
                    marginBottom: '5px'
                }}>Optional</Typography>
                <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                <FormGroup style={{ marginTop: '10px' }}>
                    <Typography>I want to (check all that apply):</Typography>
                    <FormControlLabel control={<Checkbox checked={sendCheck} onChange={onSendCheckChange} />} label="Send my child(ren) to the school when it opens" />
                    <FormControlLabel control={<Checkbox checked={donateCheck} onChange={onDonateCheckChange} />} label="Donate to the school when donations become available" />
                    <FormControlLabel control={<Checkbox checked={supportCheck} onChange={onSupportCheckChange} />} label="Show my general support for a christian school opening in Madison County" />
                    <FormControlLabel control={<Checkbox checked={workCheck} onChange={onWorkCheckChange} />} label="Apply to work at the school when positions become available" />
                </FormGroup>
            </div>

            <Button id="submit" variant='contained' onClick={onSubmit} disabled={submitDisabled} style={{ marginTop: '5px', marginBottom: '5px' }}>Submit</Button>

            <Typography style={{
                color: clsx({
                    '#0288d1': formDetails.substring(0, 5) !== 'Error',
                    '#d32f2f': formDetails.substring(0, 5) === 'Error'
                })
            }}>{formDetails}</Typography>

            <Typography style={{
                color: '#d32f2f'
            }}>{formDetails !== '' && formDetails.substring(0, 5) === 'Error' ? 'If the issue persists contact support@mcchristianschools.com' : ''}</Typography>
        </form><Typography variant='caption'> By filling out this form, you agree to recieve marketing communications via email & phone (if provided). We will never spam you and will only contact you when we have updates on the school's progress.</Typography></>
    )
}

export default ContactForm
