import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Mentors from "./pages/Mentors";
import Founders from "./pages/Founders";
import FAQ from "./pages/FAQ";
import Alumni from "./pages/Alumni";
import Program from "./pages/Program";
import Learning from "./pages/Learning";

import ReactGA from "react-ga4";

// Initialize Google Analytics
try {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
} catch (error) {
  console.error("Failed to initialize Google Analytics:", error);
}

// Track page views
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, [location]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <TrackPageView />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/program" element={<Program />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
