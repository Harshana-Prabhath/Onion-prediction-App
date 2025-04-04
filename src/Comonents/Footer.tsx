import React from "react";

const Footer: React.FC = () => {
  const footerStyle = {
    backgroundColor: "#166534",
    color: "white",
    padding: "1.5rem 0",
    marginTop: "2rem",
  };

  const footerContentStyle = {
    maxWidth: "64rem",
    margin: "0 auto",
    textAlign: "center" as const,
  };

  const copyrightStyle = {
    fontSize: "0.875rem",
  };

  const footerLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p style={copyrightStyle}>
          © 2025 Big Onion Yield Prediction Model. All rights reserved.
        </p>
        <div style={footerLinksStyle}>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Terms of Service
          </a>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
