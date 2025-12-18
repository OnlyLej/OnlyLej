import React, { useState, useEffect } from "react";
import SecurityCheck from "./components/SecurityCheck";
import Preloader from "./components/Pre";
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


  const [load, setLoad] = useState(true);
  const [verified, setVerified] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  // Preloader
  useEffect(() => {

    const t = setTimeout(() => {

      setLoad(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  // Restore verification
  useEffect(() => {
    const stored = localStorage.getItem("human");
 

    if (stored === "1") {

      setVerified(true);
    }
  }, []);

  // Risk calculation
  useEffect(() => {
    let risk = 0;

    if (!localStorage.getItem("human")) {
      risk += 2;

    }

    if (navigator.webdriver) {
      risk += 5;
   
    }

    if (window.innerWidth === 0) {
      risk += 3;
     
    }

    if (performance.now() < 2000) {
      risk += 1;
     
    }

 
    if (risk >= 1) {
    
      setShowCheck(true);
    } else {
    
    }
  }, []);

  const handleVerified = () => {
 
    localStorage.setItem("human", "1");
    setVerified(true);
    setShowCheck(false);
  };


  return (
    <>
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

      {showCheck && !verified && (
        <>
          
          <SecurityCheck onVerified={handleVerified} />
        </>
      )}
    </>
  );
}

export default App;
