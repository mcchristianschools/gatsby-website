import { Card, CardContent, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite'
import React from "react";

const InfoCard = ({ style, headerText, contentText }: { style?: any, headerText: string, contentText: string }) => {
    return (
        // TODO - consider moving card style to place where component is called. Or some of it.
        <Card style={{
            minWidth: '200px',
            maxWidth: '380px',
            padding: '70px 10px 70px 10px',
            marginTop: '-160px', // TODO - Make this a percentage or min and max. The card overlaps with the contact form when the screen width is small.
            maxHeight: '250px'  // TODO - Increase to 300px-350px if a call to action is added 
        }}>
            <CardContent style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <FavoriteIcon style={{
                    width: '100%',
                    marginBottom: '18px'
                }} />
                <Typography variant='h6' style={{
                    fontFamily: 'Corbel',
                    fontWeight: 'bold',
                    fontSize: '17px',
                    marginBottom: '18px',
                    color: '#4f4f4f'
                }}>{headerText}</Typography>
                <Typography variant='subtitle2' style={{
                    textAlign: 'center',
                    color: '#909090'
                }}>{contentText}</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard