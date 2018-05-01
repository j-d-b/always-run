module.exports = {
  siteMetadata: {
    title: 'Running Shoes Blog',
    author: 'Jacob Brady',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`
  ]
}
