import React from "react"
import { ISiteMetadata } from "./../../interfaces/requests.interface"

import Footer from "./../Footer"

export default ({
  children,
  siteMetadata,
}: {
  children: any
  siteMetadata: ISiteMetadata
  title: string
}) => (
  <>
    {children}
    <Footer siteMetadata={siteMetadata} />
  </>
)
