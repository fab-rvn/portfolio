import { func } from 'prop-types';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import useScroll from '../../utils/useScroll';
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './styles';

const Navbar = ({ toggleNavbar }) => {
  const scrollNav = useScroll();
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          faber
        </NavLogo>
        <MobileIcon onClick={toggleNavbar}>
          <AiOutlineMenu />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="work"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="blog"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: func.isRequired,
};

export default Navbar;
