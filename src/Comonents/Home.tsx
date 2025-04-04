import React from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundImage from "../../public/Images/Background.jpg";

const Home: React.FC = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/prediction-graph");
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow flex flex-col">
        <div
          className="flex-grow relative text-white p-4 "
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
            <h1 className="text-6xl font-bold mb-4 tracking-wide">
              BIG ONION YIELD
            </h1>
            <h1 className="text-6xl font-bold mb-4 tracking-wide">
              PREDICTION MODEL
            </h1>
            <h2 className="text-3xl font-semibold mb-8">IN SRI LANKA</h2>
            <p className="text-xl mb-12">
              A machine learning model for predicting big onion
              <br />
              yield based on climate factors.
            </p>
            <button
              style={{ padding: "3px 12px" }}
              className=" bg-green-700 hover:bg-green-800 text-white font-bold  rounded-md transition duration-300 cursor-pointer"
            >
              PREDICT
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
