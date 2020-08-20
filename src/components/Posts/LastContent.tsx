import React from "react"
import { IPostsContent } from "./../../interfaces/data.interface"
import { GatsbyImageProps } from "gatsby-image/index"

import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({
  content,
}: {
  content: IPostsContent[]
}) => (
  <>
    {content.map((post: IPostsContent, i: number) => (
        <Link to={post.slug} className="col-md-6" key={i}>
          <h3>{post.title}</h3>
          <div></div>
          <Img
            className="post-image"
            {...(post.childImageSharp as GatsbyImageProps)}
          />
          <p>{post.excerpt}</p>

          <p className="post-bottom">
            <span className="post-date">{post.date}</span>
            <span className="post-author">by {post.author}</span>
          </p>
        </Link>
      ))}
  </>
)
