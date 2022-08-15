import React from "react";
import {
  LeftContainer,
  NavbarContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "../styles/Navbar.style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <NavbarLink to="/about">About Us</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
};

export default Navbar;
