// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import DesktopNavbar from "./DesktopNavbar"
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"

const NavbarWrapper = styled.div`
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
  height: 100%;
`

const Navbar = () => (
  <NavbarWrapper>
    <ApplicationLogo alt="Application Logo" src="/logo.png" />
    <DesktopNavbar />
  </NavbarWrapper>
)

export default Navbar
