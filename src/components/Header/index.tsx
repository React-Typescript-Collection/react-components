import React from 'react'
import { BUTTONS_PATH, HOME_PATH, LOADINGS_PATH } from '../../constants/routes'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to={HOME_PATH} >
            Home
          </MenuLink>
          <MenuLink to={BUTTONS_PATH} >
            Buttons
          </MenuLink>
          <MenuLink to={LOADINGS_PATH} >
            Loadings
          </MenuLink>
          <MenuLink to="/blog" >
            Blog
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
