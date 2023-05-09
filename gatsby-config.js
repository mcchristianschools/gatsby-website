/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Madison County Christian Schools`,
        description: `Are you concerned about what your child's school is teach them? Feeling underwhelmed with what they are learning? Checkout Madison County Christian Schools where you can ensure your child receives a christ-centered education!`,
        author: `hkup859`,
        siteUrl: `https://mcchristianschools.com`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Madison County Christian Schools`,
                short_name: `MCCS`,
                start_url: `/`,
                // background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `browser`,
                icon: `src/images/shield_logo.webp`, // This path is relative to the root of the site.
                description: `Are you concerned about what your child's school is teach them? Feeling underwhelmed with what they are learning? Checkout Madison County Christian Schools where you can ensure your child receives a christ-centered education!`
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://mcchristianschools.com',
                sitemap: 'https://mcchristianschools.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
        // TODO2 - Lighthouse report indicates that this does reduce the LCP and SI, but dramatically increases the Total Blocking Time and leads to a lower score overall. It also slows done LCP and Time to Interactive mildly.
        // {
        //     resolve: 'gatsby-plugin-brotli',
        //     options: {
        //         extensions: ['css', 'html', 'js', 'svg']
        //     }
        // }
    ],
}
