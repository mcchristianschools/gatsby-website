// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import { List, ListItem, Typography } from "@mui/material"
import SEO from "../components/seo"

const PageLayout: React.FC = () => (
    <Layout>
        <section style={{
            backgroundColor: '#868686', // TODO - Make an image if available
            height: '971px',
            // display: 'flex',
            // justifyContent: 'center'
        }}>
            <div style={{
                paddingTop: '200px',
                paddingLeft: '35px',
                paddingRight: '35px',
                // fontWeight: '300',
                textAlign: 'center',
            }}>
                <Typography variant="h1" style={{
                    fontSize: 'max(26px, 3vw)',
                    fontFamily: 'Corbel',
                    marginBottom: '10px',
                    color: '#fff'
                }}>Madison County Christian Schools</ Typography>
                <Typography style={{
                    // textAlign: 'center',
                    fontFamily: 'Corbel',
                    fontSize: '20px',
                    color: '#e1e0e0'

                }}>Join our contact list and be notified whenever we have updates to share!</Typography>

            </div>
            {/* // TODO - Refactor positioning to center */}
            <ContactForm style={{ backgroundColor: '#eee' }}></ContactForm>
        </section>
        <section style={{
            // backgroundColor: '#fff',
            height: '600px',
        }}></section>
        <section style={{
            backgroundColor: '#f3f3f3',
            height: '775px',
        }}></section>
    </Layout>
)

export const Head = () => (
    <SEO title="MCCS" />
)

export default PageLayout