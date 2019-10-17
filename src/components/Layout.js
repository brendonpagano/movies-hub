// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import Navbar from "./Navbar"

// Styles
import "normalize.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./Layout.css"
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"

const Wrapper = styled.div`
  padding-top: ${NAVBAR_HEIGHT + GLOBAL_PADDING}px;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Navbar />
    {children}
  </Wrapper>
)

export default Layout
