import "./App.css";

import { Route, Routes } from "react-router";

import About from "./Comonents/About";
import Home from "./Comonents/Home";
import PredictionGraph from "./Comonents/PredictionGraph";
import Resources from "./Comonents/Resources";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/prediction" element={<PredictionGraph />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
