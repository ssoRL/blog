import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"
import { GatsbyImageProps } from "gatsby-image/index"

import Img from "gatsby-image"

export default ({
  siteMetadata,
  authorPicture,
}: {
  siteMetadata: IHomeRequest["site"]["siteMetadata"]
  authorPicture: GatsbyImageProps
}) => {
  return (
    <section id="header-about">
      <Img className="author-picture" {...authorPicture} />
      <p>
        {siteMetadata.author} {siteMetadata.authorDescription}
      </p>
    </section>
  )
}
