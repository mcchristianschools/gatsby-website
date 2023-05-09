import * as React from 'react';
import { IMaskInput } from 'react-imask';
import TextField from '@mui/material/TextField';
import { ChangeEvent, forwardRef, useState, Dispatch } from 'react';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const IMask = forwardRef<HTMLElement, CustomProps>(
    function IMask(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(#00) 000-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);

export default function PhoneNumber({ phoneNumber, setPhoneNumber, helperText, setHelperText }: { phoneNumber: string, setPhoneNumber: Dispatch<React.SetStateAction<string>>, helperText: string, setHelperText: Dispatch<React.SetStateAction<string>> }) {


    const onPhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHelperText('')
        setPhoneNumber(event.target.value)
    }

    return (

        <TextField
            label='Phone Number'
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            name="phoneNumber"
            id="formatted-phone-number"
            InputProps={{
                inputComponent: IMask as any,
            }}
            variant="filled"
            helperText={helperText}
            error={helperText !== ''}
        />

    );
}