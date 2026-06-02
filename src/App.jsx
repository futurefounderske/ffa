import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Mentors from "./pages/Mentors";
import FAQ from "./pages/FAQ";
import Alumni from "./pages/Alumni";
import Program from "./pages/Program";
import Learning from "./pages/Learning";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/mentors" element={<Mentors />} />
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
