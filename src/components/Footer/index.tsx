import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"

export default ({ siteMetadata }: IHomeRequest["site"]) => {
  return (
    <footer id="footer">
      <p>
        &copy; {new Date().getFullYear()} {siteMetadata.author}
      </p>
    </footer>
  )
}
