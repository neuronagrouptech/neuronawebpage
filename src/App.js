import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Courses from "./components/pages/Courses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
};

export default App;
