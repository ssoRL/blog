import React from "react"
// ignore
import titleSvg from '../../assets/images/hvc-text-only.svg'
import { navigate } from "gatsby"

export default () => {
  return (
    <header id="header">
      <img onClick={() => navigate("/")} src={titleSvg}></img>
      <hr></hr>
    </header>
  )
}
