// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"

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
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </p>
    <form>
      // TODO - 2 by 2 table/list with field title and textbox for entering data. Textboxes should be validated and easy to use, then hookup to serverless with twilio.
    </form>
  </Layout>
)

export default PageLayout