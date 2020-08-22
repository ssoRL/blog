import React from "react"
import "./../assets/styles/style.scss"
import { graphql } from "gatsby"
import { IHomeRequest } from "./../interfaces/requests.interface"

import Layout from "./../components/Layout"
import Posts from "./../components/Posts"
import Header from "../components/Header"

const IndexPage = ({ data }: { data: IHomeRequest }) => {
  // Helper to organize useful data in request
  const content = data.allMarkdownRemark.edges.map(mod => {
    const {
      frontmatter: {
        title,
        author,
        date,
        featuredImage: { childImageSharp },
      },
      excerpt,
      fields: { slug },
    } = mod.node
    return { title, author, date, excerpt, slug, childImageSharp }
  })
  const { siteMetadata } = data.site

  return (
    <Layout siteMetadata={siteMetadata} title="HighVoltageClouds Blog">
      <Header />
      <Posts content={content} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  src
                }
              }
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

export default IndexPage
