import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import BackgroundImage from "../assets/Background.jpg";

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div<{ background: string }>`
  flex-grow: 1;
  position: relative;
  padding: 1rem;
  color: white;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const Subtitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const PredictButton = styled.button`
  padding: 0.75rem 3rem;
  background-color: #15803d;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #166534;
  }
`;

// Component
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/prediction");
  };

  return (
    <PageContainer>
      <Main>
        <HeroSection background={BackgroundImage}>
          <Overlay />
          <Content>
            <Title>BIG ONION YIELD</Title>
            <Title>PREDICTION MODEL</Title>
            <Subtitle>IN SRI LANKA</Subtitle>
            <Description>
              A machine learning model for predicting big onion
              <br />
              yield based on climate factors.
            </Description>
            <PredictButton onClick={handleClick}>PREDICT</PredictButton>
          </Content>
        </HeroSection>
      </Main>
    </PageContainer>
  );
};

export default Home;
