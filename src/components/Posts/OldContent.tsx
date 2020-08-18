import React, { useState } from "react"
import { IPostsContent } from "./../../interfaces/data.interface"

import { Link } from "gatsby"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

export default ({
  content,
  title,
}: {
  content: IPostsContent[]
  title: string | undefined
}) => {
  const [slice, setSlice] = useState<number[]>([0, 2])

  return (
    <div id="old-posts">
      <h3>{title || "Older posts"}</h3>
      <div id="old-posts-content">
        {content.slice(slice[0], slice[1]).map((post, i: number) => {
          return (
            <Link to={post.slug} className="col-md-6" key={i}>
              <div className="posts-top">
                <h5>{post.title}</h5>
                <p className="post-date">{post.date}</p>
              </div>
              <p>{post.excerpt}</p>
              <p className="to-read">{post.timeToRead} min to read</p>
            </Link>
          )
        })}
      </div>
      <div id="old-posts-pagination">
        <button
          disabled={!!!(slice[0] > 0)}
          className={(!!!(slice[0] > 0) as Boolean) && "disable"}
          onClick={() => setSlice([slice[0] - 2, slice[1] - 2])}
          aria-label="Previous posts"
        >
          <FaAngleDoubleLeft />
        </button>
        <button
          disabled={!!!(slice[1] < content.length)}
          className={
            (!!!(slice[1] < content.length) as Boolean) ? "disable" : undefined
          }
          onClick={() => setSlice([slice[0] + 2, slice[1] + 2])}
          aria-label="Next posts"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  )
}
