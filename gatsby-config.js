module.exports = {
  siteMetadata: {
    title: 'Running Shoes Blog',
    author: 'Jacob Brady',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'review-pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
