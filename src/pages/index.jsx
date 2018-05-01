import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const PageBody = styled.div`
  padding-left: 2rem;
`;

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <PageBody>
      <h2>Shoe Reviews</h2>
      {posts.map(({ node }) => {
        return (
          <div key={node.id}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
          </div>
        );
      })}
    </PageBody>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
