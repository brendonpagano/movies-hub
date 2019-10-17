import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

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
        {navItems.map(item => (
          <NavItem key={item.url}>
            <Link to={item.url}>{item.name}</Link>
          </NavItem>
        ))}
      </NavigationList>
      <NavigationList style={{ justifyContent: "flex-end" }}>
        <NavItem>
          <i className="fas fa-search"></i>
        </NavItem>
        <NavItem>
          <i className="fas fa-bell"></i>
        </NavItem>
        <NavItem>
          <i className="fas fa-user"></i>
        </NavItem>
      </NavigationList>
    </>
  )
}

export default DesktopNavbar
