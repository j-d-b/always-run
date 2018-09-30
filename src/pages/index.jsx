import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from 'gatsby-image';

import ReviewCard from '../components/ReviewCard';

const PageBody = styled.div`
  padding-top: 4px;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const HomeText = styled.div`
  text-align: center;
  max-width: 900px;
  margin: auto;

  font-size: 40px;
`;

const ReviewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <PageBody>
      <HomeText>
        <div>Welcome to <strong>Always Run</strong></div>
      </HomeText>
      <h2>Shoe Reviews</h2>
      <ReviewsBox>
        {posts.map(({ node }) => {
          return (
            <div key={node.id}>
              <Img resolutions={node.frontmatter.coverImage.childImageSharp.resolutions} />
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </div>
          );
        })}
      </ReviewsBox>
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
            coverImage {
              childImageSharp {
                resolutions(width: 100) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
