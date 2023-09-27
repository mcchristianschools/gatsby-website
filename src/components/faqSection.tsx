import { Card, CardContent, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import React from "react";

const FAQSection = ({ style, questionText, answerText }: { style?: any, questionText: string, answerText: string }) => {
    return (
        <div style={{
            display: 'flex',
        }}>
            <HelpIcon />
            <div>
                <Typography variant="h6" style={{
                    fontSize: '16px',
                    fontFamily: 'Corbel',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#303030'
                }}>{questionText}</Typography>
                <Typography variant="subtitle2" style={{
                    fontFamily: 'Corbel',
                }}>{answerText}</Typography>
            </div>
        </div>
    )
}

export default FAQSection