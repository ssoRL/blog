import { GatsbyImageProps } from "gatsby-image/index"

export interface IAllMarkdownRemark {
  edges: {
    node: {
      timeToRead: Number
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        date: string
        featuredImage: {
          childImageSharp: GatsbyImageProps
        }
      }
    }
  }[]
}

export interface ISiteMetadata {
  author: string
  authorDescription: string
  description: string
  title: string
  socials: {
    linkedin: string
    twitter: string
    github: string
  }
  themeColor: string
  siteUrl: string
}

export interface IHomeRequest {
  allMarkdownRemark: IAllMarkdownRemark
  site: {
    siteMetadata: {
      author: string
      authorDescription: string
      description: string
      title: string
      socials: {
        linkedin: string
        twitter: string
        github: string
      }
      themeColor: string
      siteUrl: string
    }
  }
  authorPicture: {
    childImageSharp: {
      fixed: any
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
      date: string
      featuredImage: {
        childImageSharp: GatsbyImageProps
      }
    }
  }
  site: {
    siteMetadata: ISiteMetadata
  }
  authorPicture: {
    childImageSharp: GatsbyImageProps
  }
}
