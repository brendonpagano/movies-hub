// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  top: 0;
  left: 0;
  right: 0;
  padding: ${GLOBAL_PADDING}px;
`

const ApplicationLogo = styled.img`
  width: auto;
  height: ${NAVBAR_HEIGHT - 20}px;
`

const Navbar = () => (
  <Wrapper>
    <ApplicationLogo alt="Application Logo" src="/logo.png" />
  </Wrapper>
)

export default Navbar
