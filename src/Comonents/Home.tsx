import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PredictionGraph from "./PredictionGraph";
import BackgroundImage from "../../public/Images/Background.jpg";
import styled from "styled-components";


const mainContainerStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between`;

const heroSectionStyle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const overlayStyle = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const contentContainerStyle = styled.div`
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

const mainHeadingStyle = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const subHeadingStyle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const descriptionStyle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`;

const buttonStyle = styled.button`
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

const predictionSectionStyle = styled.section`
  padding: 2rem;
  max-width: 80rem;
  margin: 0 auto;
`;





// const Home: React.FC = () => {
//   // const mainContainerStyle = {
//   //   minHeight: "100vh",
//   //   display: "flex",
//   //   flexDirection: "column" as const,
//   //   justifyContent: "space-between",
//   // };

//   const heroSectionStyle = {
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column" as const,
//     backgroundImage: `url(${BackgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     position: "relative" as const,
//   };

//   const overlayStyle = {
//     position: "absolute" as const,
//     inset: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//   };

//   const contentContainerStyle = {
//     position: "relative" as const,
//     zIndex: 10,
//     maxWidth: "64rem",
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column" as const,
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//     textAlign: "center" as const,
//     color: "white",
//     padding: "1rem",
//   };

//   const mainHeadingStyle = {
//     fontSize: "3.75rem",
//     fontWeight: 700,
//     marginBottom: "1rem",
//     letterSpacing: "0.05em",
//   };

//   const subHeadingStyle = {
//     fontSize: "2rem",
//     fontWeight: 600,
//     marginBottom: "2rem",
//   };

//   const descriptionStyle = {
//     fontSize: "1.25rem",
//     marginBottom: "3rem",
//   };

//   const buttonStyle = {
//     backgroundColor: "#15803d",
//     color: "white",
//     fontWeight: 700,
//     padding: "0.75rem 3rem",
//     borderRadius: "0.375rem",
//     border: "none",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   };

//   const predictionSectionStyle = {
//     padding: "2rem",
//     maxWidth: "80rem",
//     margin: "0 auto",
//   };

  // const [showPrediction, setShowPrediction] = React.useState(false);

  return (
    <mainContainerStyle>
      <main style={heroSectionStyle}>
        <div style={overlayStyle}></div>
        <div style={contentContainerStyle}>
          <h1 style={mainHeadingStyle}>BIG ONION YIELD</h1>
          <h1 style={mainHeadingStyle}>PREDICTION MODEL</h1>
          <h2 style={subHeadingStyle}>IN SRI LANKA</h2>
          <p style={descriptionStyle}>
            A machine learning model for predicting big onion
            <br />
            yield based on environmental factors.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#166534")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#15803d")
            }
            onClick={() => setShowPrediction(true)}
          >
            PREDICT
          </button>
        </div>
      </main>

      {showPrediction && (
        <section style={predictionSectionStyle}>
          <PredictionGraph />
        </section>
      )}
    </mainContainerStyle>
  );
};

export default Home;
