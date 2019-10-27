// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import DesktopNavbar from "./DesktopNavbar"
import { Link } from "gatsby"
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"
import { DisplayPosition } from "./ControllableApp"

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  top: 0;
  left: 0;
  right: 0;
  padding: ${GLOBAL_PADDING}px ${GLOBAL_PADDING * 2}px;
  background-color: rgba(0, 0, 0, 0.5);
  & > * {
    flex: 1;
  }
`

const ApplicationLogo = styled.img`
  width: auto;
  height: 100%;
`

const Navbar = () => (
  <NavbarWrapper>
    <Link to="/" style={{ display: "contents" }}>
      <DisplayPosition row={0} col={0}>
        <ApplicationLogo alt="Application Logo" src="/logo.png" />
      </DisplayPosition>
    </Link>
    <DesktopNavbar />
  </NavbarWrapper>
)

export default Navbar
