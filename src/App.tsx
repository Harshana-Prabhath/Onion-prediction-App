import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./Comonents/Home";
import PredictionGraph from "./Comonents/PredictionGraph";
import About from "./Comonents/About";
import Resources from "./Comonents/Resources";
import Contact from "./Comonents/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/prediction-graph" element={<PredictionGraph />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
