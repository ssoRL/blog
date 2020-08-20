import { GatsbyImageProps } from "gatsby-image/index"

export interface IPostsContent {
  title: string
  author: string
  date: string
  excerpt: string
  slug: string
  childImageSharp?: GatsbyImageProps
}
