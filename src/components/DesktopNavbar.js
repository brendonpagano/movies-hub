import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const NavigationList = styled.ul`
  display: flex;
  list-style-type: none;
`

const NavItem = styled.li`
  margin-left: 18px;
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
`

const navItems = [
  { url: "/movies", name: "Filmes" },
  { url: "/shows", name: "Séries" },
  { url: "/my-list", name: "Minha Lista" },
]

const DesktopNavbar = () => {
  return (
    <>
      <NavigationList>
        {navItems.map(item => (
          <NavItem>
            <Link to={item.url}>{item.name}</Link>
          </NavItem>
        ))}
      </NavigationList>
      <NavigationList>
        <NavItem>
          <i className="fas fa-search"></i>
        </NavItem>
        <NavItem>Notifications</NavItem>
        <NavItem>My Account</NavItem>
      </NavigationList>
    </>
  )
}

export default DesktopNavbar
