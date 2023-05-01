/**
 * TODO - Do we need useStaticQuery?
 * TODO - Is there more SEO that can be added?
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

// TODO - integrate mui styled or themeProvider. The replacement(s) for makeStyles/withStyles. Note, emotion does not work with SSR -> https://mui.com/material-ui/guides/styled-engine/#how-to-switch-to-styled-components

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          marginLeft: '25%',
          maxWidth: '50%',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: '25px',
          }}
        >
          © {new Date().getFullYear()} &middot; Madison County Christian Schools
        </footer>
      </div>
    </>
  )
}

export default Layout
