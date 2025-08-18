import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Skill from "./pages/SkillPage.jsx";
import About from "./pages/About.jsx";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
