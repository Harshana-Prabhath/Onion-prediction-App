import React from "react";
import styled from "styled-components";
import PredictionGraph from "./PredictionGraph";
import BackgroundImage from "../../public/Images/Background.jpg";

// Styled Components
const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-image: "url(${BackgroundImage})";
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: white;
  padding: 1rem;
`;

const MainHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`;

const PredictButton = styled.button`
  background-color: #15803d;
  color: white;
  font-weight: 700;
  padding: 0.75rem 3rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #166534;
  }
`;

const PredictionSection = styled.section`
  padding: 2rem;
  max-width: 80rem;
  margin: 0 auto;
`;

// Component
const Home: React.FC = () => {
  const [showPrediction, setShowPrediction] = React.useState(false);

  return (
    <MainContainer>
      <HeroSection>
        <Overlay />
        <ContentContainer>
          <MainHeading>BIG ONION YIELD</MainHeading>
          <MainHeading>PREDICTION MODEL</MainHeading>
          <SubHeading>IN SRI LANKA</SubHeading>
          <Description>
            A machine learning model for predicting big onion
            <br />
            yield based on environmental factors.
          </Description>
          <PredictButton onClick={() => setShowPrediction(true)}>
            PREDICT
          </PredictButton>
        </ContentContainer>
      </HeroSection>

      {showPrediction && (
        <PredictionSection>
          <PredictionGraph />
        </PredictionSection>
      )}
    </MainContainer>
  );
};

export default Home;
