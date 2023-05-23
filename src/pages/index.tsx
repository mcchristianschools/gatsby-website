// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import { Divider, Typography } from "@mui/material"
import SEO from "../components/seo"
import InfoCard from "../components/infoCard"
import FAQSection from "../components/faqSection"
import AspectRatio from '@mui/joy/AspectRatio';


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
            <ContactForm style={{
                backgroundColor: '#eee'
                // TODO - Center content on large page
            }}></ContactForm>
        </section>
        <section style={{
            // backgroundColor: '#fff',
            height: '600px',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'flex'
                // TODO - Center content on large page
            }}>
                <div style={{
                    minWidth: '25px',
                    maxWidth: '150px',
                    width: '8%'
                }}></div>
                <InfoCard headerText='Christ Focused' contentText='Everything we do from ____ to ____ is focused on Christ and sharing him with those around us. While education itself is important, there is nothing more important than Christ and making him known.' />
                <InfoCard headerText='Quality Education' contentText='Feeling underwhelmed with the education your child is currently recieving? We focus on teaching your kids everything they need to know to grow up and become successful adults, without all the political propaganda.' />
                <InfoCard headerText='Honest & Open' contentText="The dishonesty and secrecy in today's education system doesn't work for us and it shouldn't work for you either. We try in everything we do to be open, honest, and clear about our intentions, what we teach, and how we teach it." />
                <div style={{
                    minWidth: '25px',
                    maxWidth: '150px',
                    width: '8%'
                }}></div>
            </div>
            <Typography style={{
                marginTop: '120px',
                color: '#909090'
            }} variant="h5">Committed to education, unapologetically Christian</Typography>
        </section>
        <section style={{
            backgroundColor: '#f3f3f3',
            height: '775px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
            // width: '200%' // TODO - Issue with width 100% not working on mobile. Shortening the screen works perfectly, but with mobile it shows with a variable padding/margin.
        }}>
            <div style={{
                maxWidth: '340px',
                marginLeft: '18%',
                // marginRight: '50px'
            }}>

                <div style={{
                    width: '200px',
                    // padding: '0px 0px 0px 10px'
                }}>
                    <Typography variant="h5" style={{
                        fontSize: '28px',
                        fontFamily: 'Corbel',
                        color: '#303030'
                    }}>Have Questions?</Typography>
                    <Divider variant='middle' />
                </div>
                <FAQSection questionText='Question 1' answerText='Answer text here ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan.'></FAQSection>
            </div>
            <AspectRatio ratio='95/65' style={{
                maxWidth: '950px',
                maxHeight: '650px',
                width: '48%',
                minWidth: '400px',
                marginLeft: '50px'
                // color: 'blue'
            }}>IMAGE HERE
            </AspectRatio>

        </section>
    </Layout>
)

export const Head = () => (
    <SEO title="MCCS" />
)

export default PageLayout