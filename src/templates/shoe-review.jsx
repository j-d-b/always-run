import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export default function Template({ data }) {
  const post = data.markdownRemark;
  console.log(post);

  return (
    <div>
      <Helmet title={`Running Blog - ${post.frontmatter.title}`} />
      <Link to={'/reviews'}>⬅ Return to all reviews</Link>
      <Img resolutions={post.frontmatter.coverImage.childImageSharp.resolutions} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        coverImage {
          childImageSharp {
            resolutions(width: 400) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
