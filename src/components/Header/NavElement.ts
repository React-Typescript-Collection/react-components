import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'

export type MenuLinkProps = {
  to: string;
  activeStyle?: any;
}


export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 50px;
  display: flex;
  background: #3C50E0;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    background-color: #1C2434;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`