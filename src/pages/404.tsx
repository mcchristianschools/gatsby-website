import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>
      I'm sorry, this page could not be found. Please return to the{" "}
      <Link to="/">home page</Link>
    </p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
