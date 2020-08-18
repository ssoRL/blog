import React from "react"
import { IPostsContent } from "./../../interfaces/data.interface"
import { GatsbyImageProps } from "gatsby-image/index"

import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({
  content,
  isUICol,
}: {
  content: IPostsContent[]
  isUICol: Boolean
}) => (
  <>
    {content.map((post: IPostsContent, i: number) => {
      return isUICol ? (
        <Link to={post.slug} className="col-md-6" key={i}>
          <h3>{post.title}</h3>
          <div></div>
          <Img
            className="post-image"
            {...(post.childImageSharp as GatsbyImageProps)}
          />
          <p>{post.excerpt}</p>

          <p className="post-bottom">
            <span className="post-to-read">{post.timeToRead} min to read</span>
            <span className="post-date">{post.date}</span>
          </p>
        </Link>
      ) : (
        <Link to={post.slug} className="post-row" key={i}>
          <Img
            className="post-image"
            {...(post.childImageSharp as GatsbyImageProps)}
          />
          <div className="post-content">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>

            <p className="post-bottom">
              <span className="post-to-read">
                {post.timeToRead} min to read
              </span>
              <span className="post-date">{post.date}</span>
            </p>
          </div>
        </Link>
      )
    })}
  </>
)
