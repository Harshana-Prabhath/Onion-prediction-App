import React, { useState } from "react";

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const navItems = ["Home", "About", "Mdol", "Contact"];

  const navContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "100%",
  };

  const navItemsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "4rem",
  };

  return (
    <nav style={navContainerStyle}>
      <div style={navItemsStyle}>
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            style={{
              position: "relative",
              padding: "0.25rem 0.5rem",
              fontWeight: 500,
              color: activeItem === item ? "#15803d" : "#000000",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#15803d";
            }}
            onMouseLeave={(e) => {
              if (activeItem !== item) {
                e.currentTarget.style.color = "#000000";
              }
            }}
          >
            {item}
            <span
              style={{
                content: "",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: activeItem === item ? "100%" : "0",
                height: "2px",
                backgroundColor: "#15803d",
                transition: "width 0.3s ease",
              }}
              className="nav-underline"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
