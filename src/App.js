import React from "react";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact"; // ✅ ADD THIS

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Contact /> {/* ✅ ADD THIS */}
    </div>
  );
}