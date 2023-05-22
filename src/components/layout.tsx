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
        <div style={{ margin: '-8px' }}> {/*// TODO - Try to find a better way*/}
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: '25px',
                        fontSize: '14px',
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    © {new Date().getFullYear()} &middot; Madison County Christian Schools
                </footer>
            </div>

        </ div>
    )
}

export default Layout
