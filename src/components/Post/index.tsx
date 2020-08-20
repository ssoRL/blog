import React from "react"
import { graphql } from "gatsby"
import "./../../assets/styles/style.scss"
import { IPostRequest } from "../../interfaces/requests.interface"

import Img from "gatsby-image"
import Layout from '../Layout'
import OlderPosts from "../Posts/OldContent"

export default ({ data }: { data: IPostRequest }) => {
  // Helper to organize useful data in request
  const {
    site: { siteMetadata },
    markdownRemark: {
      frontmatter: { featuredImage, title, author },
      html,
    },
  } = data
  const imgProps = featuredImage.childImageSharp
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: { title, author, date },
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, author, date, excerpt, slug }
  })

  return (
    <Layout siteMetadata={siteMetadata} title={title}>
      <section id="post">
          <Img
            fluid={imgProps.fluid}
            title={title}
            alt={title}
          />
        <div id="post-body">
          <h1 id="post-title">{title}</h1>
          <div id="post-author">by {author}</div>
          <div id="post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
      <section id="post-old-posts">
        <OlderPosts content={content} title="Newest posts" />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      excerpt
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
  }
`
