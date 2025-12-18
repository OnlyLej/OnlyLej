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
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  console.log("[App] render");

  const [load, setLoad] = useState(true);
  const [verified, setVerified] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  // Preloader
  useEffect(() => {
    console.log("[Preloader] start");
    const t = setTimeout(() => {
      console.log("[Preloader] done");
      setLoad(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  // Restore verification
  useEffect(() => {
    const stored = localStorage.getItem("human");
    console.log("[Verify] localStorage human =", stored);

    if (stored === "1") {
      console.log("[Verify] already verified");
      setVerified(true);
    }
  }, []);

  // Risk calculation
  useEffect(() => {
    let risk = 0;

    if (!localStorage.getItem("human")) {
      risk += 2;
      console.log("[Risk] no human flag (+2)");
    }

    if (navigator.webdriver) {
      risk += 5;
      console.log("[Risk] webdriver detected (+5)");
    }

    if (window.innerWidth === 0) {
      risk += 3;
      console.log("[Risk] zero width (+3)");
    }

    if (performance.now() < 2000) {
      risk += 1;
      console.log("[Risk] fast load (+1)");
    }

    console.log("[Risk] total =", risk);

    if (risk >= 0) {
      console.log("[Risk] HIGH → showing Turnstile");
      setShowCheck(true);
    } else {
      console.log("[Risk] LOW → no check");
    }
  }, []);

  const handleVerified = () => {
    console.log("[Turnstile] verified");
    localStorage.setItem("human", "1");
    setVerified(true);
    setShowCheck(false);
  };

  console.log("[Render flags]", {
    load,
    verified,
    showCheck,
  });

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

          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>

      {showCheck && !verified && (
        <>
          {console.log("[Render] SecurityCheck mounted")}
          <SecurityCheck onVerified={handleVerified} />
        </>
      )}
    </>
  );
}

export default App;
