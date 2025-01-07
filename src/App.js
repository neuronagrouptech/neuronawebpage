import React, { useRef, useEffect } from "react";

import Navbar from './components/common/Navbar';

import Home from "./components/pages/Home";
import About from  "./components/pages/About";
import Services from  "./components/pages/Services";
import Cases from  "./components/pages/Cases";
import Partners from  "./components/pages/Partners";
import Contact from  "./components/forms/Contact";
import Footer from  "./components/common/Footer";
import Copyright from  "./components/common/Copyright";
import setupParticleAnimation from "./components/assets/home/particleAnimation";


import "./index.css";

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
