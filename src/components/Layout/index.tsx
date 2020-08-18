import React from "react"
import { ISiteMetadata } from "./../../interfaces/requests.interface"

import Head from "./../Head"
import Header from "./../Header"
import Footer from "./../Footer"

export default ({
  children,
  siteMetadata,
  title,
}: {
  children: any
  siteMetadata: ISiteMetadata
  title: string
}) => (
  <>
    <Header siteMetadata={siteMetadata} />
    <Head siteMetadata={siteMetadata} pageName={title} />
    {children}
    <Footer siteMetadata={siteMetadata} />
  </>
)
