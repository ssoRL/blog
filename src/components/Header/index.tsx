import React from "react"
import { navigate } from "gatsby"
import { IPostRequest } from "./../../interfaces/requests.interface"

import Socials from "./../Socials"

export default ({ siteMetadata }: IPostRequest["site"]) => {
  return (
    <header id="header">
      <h1 onClick={() => navigate("/")}>{siteMetadata.title}</h1>
      <span>
        <Socials siteMetadata={siteMetadata} />
      </span>
    </header>
  )
}
