import { GatsbyImageProps, GatsbyImageFluidProps } from "gatsby-image/index"

export interface IAllMarkdownRemark {
  edges: {
    node: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        author: string
        date: string
        featuredImage: {
          childImageSharp: GatsbyImageProps
        }
      }
    }
  }[]
}

export interface ISiteMetadata {
  author: string,
  siteUrl: string
}

export interface IHomeRequest {
  allMarkdownRemark: IAllMarkdownRemark
  site: {
    siteMetadata: {
      author: string,
      siteUrl: string
    }
  }
}

export interface IPostRequest {
  allMarkdownRemark: IAllMarkdownRemark
  markdownRemark: {
    fields: {
      slug: string
    }
    excerpt: string
    html: string
    frontmatter: {
      title: string
      author: string
      date: string
      featuredImage: {
        childImageSharp: GatsbyImageFluidProps
      }
    }
  }
  site: {
    siteMetadata: ISiteMetadata
  }
}
