/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }: { description?: string, title?: string, children?: any }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={defaultTitle ? defaultTitle : title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="mcchristianschools.com" />
            <meta property="og:image" content="../images/shield_logo.webp" />
            <meta name="keywords" content="Christian, School, Richmond KY, Gracepoint, Christian School, Education, Learning, Elementary, Elementary School, Schooling, Teaching" />
            {children}
        </>
    )
}

export default Seo
