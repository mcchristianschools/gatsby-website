// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import { List, ListItem, Typography } from "@mui/material"

const PageLayout: React.FC = () => (
    <Layout>
        <h1 style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <StaticImage src="../images/full_logo.webp" alt="Lionhead logo with the full school name" style={{
                maxWidth: '600px'
            }} />
        </h1>
        <div>
            <Typography>We are very excited to announce we are starting a Christian School in Madison County! We are still in the early stages, however here are the details we can provide today:</Typography>
            <List>
                <ListItem>- We will have classes from preschool through 5th grade.</ListItem>
                <ListItem>- The school is planned to be in Richmond</ListItem>
                <ListItem>- We are aiming to launch the fall of 2024. We can't guarentee this timeframe, but we are working hard to ensure we meet it.</ListItem>
            </List>
        </div>

        <Typography variant='h5' style={{ marginBottom: '5px', marginTop: '10px' }}>We need your help!</Typography>
        <Typography variant='subtitle2' style={{ marginBottom: '10px' }}>Starting a school is hard work and your support goes a long way to making this a reality. Please fill out the form below to show your support for Madison County Christian Schools!</Typography>
        <ContactForm></ContactForm>
    </Layout>
)

export default PageLayout