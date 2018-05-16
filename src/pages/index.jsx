import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const PageBody = styled.div`
  padding-top: 4px;
  padding-left: 2rem;
`;

const HomeText = styled.div`
  text-align: center;
  max-width: 900px;
  margin: auto;

  font-size: 40px;
`

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <PageBody>
      <HomeText>
        <div>Welcome to <strong>Always Run</strong></div>
      </HomeText>
      <h2>Shoe Reviews</h2>
      {posts.map(({ node }) => {
        return (
          <div key={node.id}>
            <img src='inov8-roclite-290/roclite-in-palm.jpg' />
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
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
