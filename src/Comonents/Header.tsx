import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: white;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

const NavLink = styled.a<{ active: boolean }>`
  position: relative;
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#15803d" : "#000000")};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #15803d;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background-color: #15803d;
    transition: width 0.3s ease;
  }
`;

// Component
const Header: React.FC = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>("Home");
  const navItems = ["Home", "About", "Resources", "Contact"];

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <Nav>
      <NavItems>
        {navItems.map((item) => (
          <NavLink
            key={item}
            href="#"
            active={activeItem === item}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item);
              navigate(`${item}`);
            }}
          >
            {item}
          </NavLink>
        ))}
      </NavItems>
    </Nav>
  );
};

export default Header;
