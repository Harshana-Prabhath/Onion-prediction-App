import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router";

const HeaderWrapper = styled.div`
  background: ${theme.color.white};
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
  text-decoration: none;
`;
const ListItem = styled.li`
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: ${theme.color.verdantGreen};
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px; /* Adjust position if needed */
    width: 0;
    height: 5px;
    background-color: ${theme.color.springMeadow};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
const ExternalLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${theme.color.verdantGreen};
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px; /* Adjust position if needed */
    width: 0;
    height: 5px;
    background-color: ${theme.color.springMeadow};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  const gitHubUrl = import.meta.env.VITE_GITHUB_URL;
  return (
    <HeaderWrapper>
      <StyledNav>
        <StyledList>
          <ListItem>
            <Link to="/">
              <img
                src="/src/assets/images/logo_onion.png"
                alt="company-logo"
                height={60}
                width={60}
              />
            </Link>
          </ListItem>
          <ListItem>
            <ExternalLink href={gitHubUrl} target="_blank">
              Code Base
            </ExternalLink>
          </ListItem>
          <ListItem>
            <StyledLink style={{ textDecoration: "none" }} to="/about">
              About Us
            </StyledLink>
          </ListItem>
        </StyledList>
      </StyledNav>
    </HeaderWrapper>
  );
};

export default Header;
