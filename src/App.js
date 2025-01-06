import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Partners from "./components/Partners";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Copyright from "../src/components/Copyright";
import setupParticleAnimation from "./assets/home/particleAnimation";
import LanguageSelector from "./components/LanguajeSelector"; 
import './index.css';


const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = setupParticleAnimation(canvasRef.current);
    window.dispatchEvent(new Event("resize"));
    return () => {
      cleanup();
    };
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-r from-darkLeft to-darkRight w-screen min-h-screen overflow-hidden max-w-full">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full min-h-full"
        />
        <Navbar />
        <Home />
        <About />
        <Services />
        <Cases />
        <Partners />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default App;
