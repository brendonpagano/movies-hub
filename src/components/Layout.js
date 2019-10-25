// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import Navbar from "./Navbar"
import ControllableApp from "./ControllableApp"

// Styles
import "normalize.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./Layout.css"
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"

const Wrapper = styled.div`
  padding: ${NAVBAR_HEIGHT + GLOBAL_PADDING}px ${GLOBAL_PADDING * 2}px;
`

const Layout = ({ children }) => (
  <Wrapper>
    <ControllableApp>
      <Navbar />
      {children}
    </ControllableApp>
  </Wrapper>
)

export default Layout
