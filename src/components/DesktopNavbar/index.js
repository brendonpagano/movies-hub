// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import { Link } from "gatsby"
import NavItem from "./NavItem"

const NavigationList = styled.ul`
  display: flex;
  align-self: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Search = () => <i className="fas fa-search"></i>
const Notifications = () => <i className="fas fa-bell"></i>
const UserMenu = () => <i className="fas fa-user"></i>

const navItems = {
  left: [
    { url: "/movies", name: "Filmes" },
    { url: "/shows", name: "Séries" },
    { url: "/my-list", name: "Minha Lista" },
  ],
  right: [Search, Notifications, UserMenu],
}

const DesktopNavbar = () => {
  return (
    <>
      <NavigationList>
        {navItems.left.map((item, i) => (
          <NavItem key={item.url} position={[0, 1 + i]}>
            <Link to={item.url}>{item.name}</Link>
          </NavItem>
        ))}
      </NavigationList>
      <NavigationList style={{ justifyContent: "flex-end" }}>
        {navItems.right.map((Comp, i) => (
          <NavItem key={i} position={[0, 1 + navItems.left.length + i]}>
            <Comp />
          </NavItem>
        ))}
      </NavigationList>
    </>
  )
}

export default DesktopNavbar
