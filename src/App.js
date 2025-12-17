import React, { useState, useEffect } from "react";
import SecurityCheck from "./components/SecurityCheck";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [load, updateLoad] = useState(true);
  const [verified, setVerified] = useState(
  localStorage.getItem("human") === "1"
  );
  const [needsCheck, setNeedsCheck] = useState(false);

  const handleVerified = () => {
  localStorage.setItem("human", "1");
  setVerified(true);
  setNeedsCheck(false);
  };
  
  function calculateRisk() {
   let score = 0;
 
   if (!localStorage.getItem("human")) score += 2;
   if (navigator.webdriver) score += 5;
   if (window.innerWidth === 0) score += 3;
   if (performance.now() < 2000) score += 1;
 
   return score;
  }

  useEffect(() => {
   const risk = calculateRisk();

   if (risk >= 4) {
     setNeedsCheck(true);
   }
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Analytics />
        <Footer />
      </div>
    </Router>
    {needsCheck && (
    <SecurityCheck onVerified={handleVerified} />
    )}
  );
}

export default App;
