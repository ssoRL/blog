import React from "react"
import { graphql } from "gatsby"
import "./../../assets/styles/style.scss"
import { IPostRequest } from "./../../interfaces/requests.interface"
import { GatsbyImageProps } from "gatsby-image/index"

import Img from "gatsby-image"
import Layout from './../Layout'
import About from "./../About"
import OlderPosts from "./../Posts/OldContent"

export default ({ data }: { data: IPostRequest }) => {
  // Helper to organize useful data in request
  const {
    site: { siteMetadata },
    markdownRemark: {
      frontmatter: { featuredImage, title },
      html,
    },
    authorPicture: { childImageSharp: authorPicture },
  } = data
  const imgProps = featuredImage.childImageSharp
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: { title, date },
      timeToRead,
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, timeToRead, date, excerpt, slug }
  })

  return (
    <Layout siteMetadata={siteMetadata} title={title}>
      <section id="post">
        <h1 id="post-title">{title}</h1>
        <div id="cover-image">
          <Img {...(imgProps as GatsbyImageProps)} />
        </div>
        <div id="post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <section id="about-post">
        <About siteMetadata={siteMetadata} authorPicture={authorPicture} />
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
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
        authorDescription
        description
        title
        socials {
          linkedin
          twitter
          github
        }
        themeColor
        siteUrl
      }
    }
    authorPicture: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
