import React from "react"
import { IHomeRequest } from "./../../interfaces/requests.interface"

import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa"

export default ({
  siteMetadata: {
    socials: { linkedin, twitter, github },
  },
}: IHomeRequest["site"]) => (
  <>
    <a target="_blank" href={linkedin} aria-label="Linkedin" rel="noreferrer">
      <FaLinkedin />
    </a>
    <a target="_blank" href={twitter} aria-label="Twitter" rel="noreferrer">
      <FaTwitterSquare />
    </a>
    <a target="_blank" href={github} aria-label="Github" rel="noreferrer">
      <FaGithub />
    </a>
  </>
)
