import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PageBody = styled.div`
  padding-left: 2rem;
`;

export default function ReviewPage({ data }){
  const posts = data.allMarkdownRemark.edges;

  return (
    <PageBody>
      <h2>All Reviews</h2>
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
  query ReviewsQuery {
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
