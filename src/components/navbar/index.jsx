import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.div`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  text-decoration: none;
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;
const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "3em")};
  height: ${({ size }) => (size ? size + "px" : "3em")};

  img {
    width: 100%;
    height: 100%;
  }
`;
export function Navbar(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <Link to="/">
        <LogoImage>
          <img src="/images/logo/stf (1).png" alt="Servycing logo" />
        </LogoImage>
      </Link>
      <AccessibilityContainer>
        {
          <Link to="/searchfreelancers">
            <AnchorLink>Search</AnchorLink>
          </Link>
        }
        <Link to="/team">
          <AnchorLink>Team</AnchorLink>
        </Link>
        <Link to="/about">
          <AnchorLink>About</AnchorLink>
        </Link>
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={10} />
        <a href="https://forms.gle/gWknBYgbUXjrYs4u9" target="_blank">
          <Button size={18}>Join!</Button>
        </a>
        <Marginer direction="horizontal" margin={8} />
        {/* <AnchorLink to="/customer/access/signin">Search Profiles</AnchorLink> */}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
