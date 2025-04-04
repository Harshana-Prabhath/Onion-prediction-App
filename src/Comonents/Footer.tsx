import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #166534;
  color: white;
  padding: 1.5rem 0;
  `;
const FooterContentStyle = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const CopyrightStyle = styled.p`
  font-size: 0.875rem;
`;

const FooterLinksStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #bbf7d0;
  }
`;



const Footer: React.FC = () => {
 
  return (
    <FooterStyle>
      <FooterContentStyle>
        <CopyrightStyle>
          © 2025 Big Onion Yield Prediction Model. All rights reserved.
        </CopyrightStyle>
        <FooterLinksStyle>
          <FooterLink
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Privacy Policy
          </FooterLink>
          <FooterLink
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Terms of Service
          </FooterLink>
          <FooterLink
            href="#"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbf7d0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            Contact Us
          </FooterLink>
        </FooterLinksStyle>
      </FooterContentStyle>
    </FooterStyle>
  );
};

export default Footer;
