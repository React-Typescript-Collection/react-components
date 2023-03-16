import React from 'react';
import { BUTTONS_PATH, HOME_PATH, LOADINGS_PATH, MODALS_PATH } from '../../constants/routes';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement';

interface MenuTypes {
  name: String;
  path: any;
}

const menus: MenuTypes[] = [
  {
    name: "Home",
    path: HOME_PATH,
  },
  {
    name: "Buttons",
    path: BUTTONS_PATH,
  },
  {
    name: "Loadings",
    path: LOADINGS_PATH,
  },
  {
    name: "Modals",
    path: MODALS_PATH,
  },
]

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          {menus.map((menu, index) => (
            <MenuLink key={index} to={menu.path} >
              {menu.name}
            </MenuLink>
          ))}
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
