import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"

import { Helmet } from "react-helmet"

export default ({
  pageName,
  siteMetadata: { description, author, siteUrl, themeColor },
}: {
  pageName: string
  siteMetadata: IHomeRequest["site"]["siteMetadata"]
}) => (
  <Helmet htmlAttributes={{ lang: "en" }}>
    <meta charSet="utf-8" />
    <title>
      {author} | {pageName}
    </title>
    <link rel="canonical" href={siteUrl} />
    <meta name="description" content={description} />
    <meta name="theme-color" content={themeColor || "#fff"} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </Helmet>
)
