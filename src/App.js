import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Skills from "./Component/Skills"
import Resumelink from "./Component/Resumelink";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resumelink" element={<Resumelink />} />
      </Routes>
  </>
  );
};

export default App;
