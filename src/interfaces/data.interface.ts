import { GatsbyImageProps } from "gatsby-image/index"

export interface IPostsContent {
  title: string
  timeToRead: Number
  date: string
  excerpt: string
  slug: string
  childImageSharp?: GatsbyImageProps
}
