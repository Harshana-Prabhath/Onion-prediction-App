import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PredictionGraph from "./PredictionGraph";
import BackgroundImage from "../../public/Images/Background.jpg";

const Home: React.FC = () => {
  const mainContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
  };

  const heroSectionStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column" as const,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative" as const,
  };

  const overlayStyle = {
    position: "absolute" as const,
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };

  const contentContainerStyle = {
    position: "relative" as const,
    zIndex: 10,
    maxWidth: "64rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center" as const,
    color: "white",
    padding: "1rem",
  };

  const mainHeadingStyle = {
    fontSize: "3.75rem",
    fontWeight: 700,
    marginBottom: "1rem",
    letterSpacing: "0.05em",
  };

  const subHeadingStyle = {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
  };

  const descriptionStyle = {
    fontSize: "1.25rem",
    marginBottom: "3rem",
  };

  const buttonStyle = {
    backgroundColor: "#15803d",
    color: "white",
    fontWeight: 700,
    padding: "0.75rem 3rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const predictionSectionStyle = {
    padding: "2rem",
    maxWidth: "80rem",
    margin: "0 auto",
  };

  const [showPrediction, setShowPrediction] = React.useState(false);

  return (
    <div style={mainContainerStyle}>
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
    </div>
  );
};

export default Home;
