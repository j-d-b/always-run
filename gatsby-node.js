const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const shoeReview = path.resolve('./src/templates/shoe-review.jsx');

    resolve(
      graphql(
        `{
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  path
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(post => {
          createPage({
            path: post.node.frontmatter.path,
            component: shoeReview,
            context: {} // additional data can be passed via context
          });
        });
      })
    );
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      value,
    })
  }
}
