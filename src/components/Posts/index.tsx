import React from "react"
import { IPostsContent } from "./../../interfaces/data.interface"

import LastContent from "./LastContent"
import OldContent from "./OldContent"

export default ({ content }: { content: IPostsContent[] }) => {
  return (
    <>
      <section id="posts">
        <LastContent content={content.slice(0, 4)} />
        <OldContent content={content.slice(4)}  title={undefined} />
      </section>
    </>
  )
}
