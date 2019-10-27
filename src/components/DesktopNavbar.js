// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import { Link } from "gatsby"
import { DisplayPosition } from "./ControllableApp"

const NavigationList = styled.ul`
  display: flex;
  align-self: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin-left: 25px;
  font-weight: 900;
  font-size: 13px;
  color: #e5e5e5;
  text-transform: uppercase;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  i {
    font-size: 18px;
  }
`

const navItems = [
  { url: "/movies", name: "Filmes" },
  { url: "/shows", name: "Séries" },
  { url: "/my-list", name: "Minha Lista" },
]

const DesktopNavbar = () => {
  return (
    <>
      <NavigationList sty>
        {navItems.map((item, i) => (
          <DisplayPosition key={item.url} row={0} col={1 + i}>
            <NavItem>
              <Link to={item.url}>{item.name}</Link>
            </NavItem>
          </DisplayPosition>
        ))}
      </NavigationList>
      <NavigationList style={{ justifyContent: "flex-end" }}>
        <DisplayPosition row={0} col={navItems.length + 1}>
          <NavItem>
            <i className="fas fa-search"></i>
          </NavItem>
        </DisplayPosition>
        <DisplayPosition row={0} col={navItems.length + 2}>
          <NavItem>
            <i className="fas fa-bell"></i>
          </NavItem>
        </DisplayPosition>
        <DisplayPosition row={0} col={navItems.length + 3}>
          <NavItem>
            <i className="fas fa-user"></i>
          </NavItem>
        </DisplayPosition>
      </NavigationList>
    </>
  )
}

export default DesktopNavbar
