import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + 120 + "px" : "9em")};
  height: ${({ size }) => (size ? size + "px" : "5em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src="/images/logo/white_logo.png" alt="Servycing logo" />
          </LogoImage>
        </Link>
      )}
      {/* <StyledLink to="/">
        {!isMobile && (
          <LogoTitle size={textSize} color={color}>
            TechSavvyFreelancers
          </LogoTitle>
        )}
      </StyledLink> */}
    </BrandLogoContainer>
  );
}
