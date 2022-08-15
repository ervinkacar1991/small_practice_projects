import React from "react";
import {
  LeftContainer,
  NavbarContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
} from "../styles/Navbar.style";
import logoImg from "./assets/logo.png";

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
            <OpenLinksButton>&#8801;</OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={logoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
};

export default Navbar;
