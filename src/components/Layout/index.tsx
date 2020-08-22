import React from "react"
import { ISiteMetadata } from "./../../interfaces/requests.interface"

import Footer from "./../Footer"
import Helmet from "react-helmet"

export default ({
  children,
  siteMetadata,
  title
}: {
  children: any
  siteMetadata: ISiteMetadata
  title: string
}) => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
    </Helmet>
    {children}
    <Footer siteMetadata={siteMetadata} />
  </>
)
