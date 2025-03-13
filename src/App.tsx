import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./Comonents/Home";
import PredictionGraph from "./Comonents/PredictionGraph";
import AboutUs from "./Comonents/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/prediction-graph" element={<PredictionGraph />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
