import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"

import Socials from "./../Socials"

export default ({ siteMetadata }: IHomeRequest["site"]) => {
  return (
    <footer id="footer">
      <p>
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
      <span id="footer-socials">
        <Socials siteMetadata={siteMetadata} />
      </span>
    </footer>
  )
}
