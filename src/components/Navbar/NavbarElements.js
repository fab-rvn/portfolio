import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 968px) {
    transition: all 0.8s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  margin-left: 24px;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3 ease-in-out;
  &:hover {
    color: #61dafb;
    transition: all 0.3 ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #61dafb;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
