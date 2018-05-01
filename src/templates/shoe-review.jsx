import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const post = data.markdownRemark;
  console.log(post);

  return (
    <div>
      <Helmet title={`Running Blog - ${post.frontmatter.title}`} />
      <Link to={'/shoe-reviews'}>⬅ Return to all reviews</Link>
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
      }
    }
  }
`;
