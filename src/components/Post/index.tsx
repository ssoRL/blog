import React from "react"
import { graphql, navigate } from "gatsby"
import "./../../assets/styles/style.scss"
import backToMain from '../../assets/images/back-to-main.svg'
import { IPostRequest } from "../../interfaces/requests.interface"

import Img from "gatsby-image"
import Layout from '../Layout'
import AdjacentPosts from "./AdjacentPosts"

export default ({ data }: { data: IPostRequest }) => {
  // Helper to organize useful data in request
  const {
    site: { siteMetadata },
    markdownRemark: {
      fields: { slug },
      frontmatter: { featuredImage, title, author },
      html,
    },
  } = data
  const imgProps = featuredImage.childImageSharp

  return (
    <Layout siteMetadata={siteMetadata} title={`HVC Blog: ${title}`}>
      <section id="post">
          <img id="go-home" onClick={() => navigate("/")} src={backToMain}></img>
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
      <AdjacentPosts currentSlug={slug} allMarkdown={data.allMarkdownRemark} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        next {
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
        node {
          timeToRead
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            author
            featuredImage {
              childImageSharp {
                fixed(cropFocus: CENTER, fit: COVER, height: 80, width: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
