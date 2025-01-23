import React, { useRef, useEffect } from "react";
import Navbar from "../common/Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Cases from "./Cases";
import Partners from "./Partners";
import Contact from "./Contact";
import Footer from "../common/Footer";
import Copyright from "../common/Copyright";
import setupParticleAnimation from "../assets/home/particleAnimation";




const LandingPage = () => {
    
const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = setupParticleAnimation(canvasRef.current);
    window.dispatchEvent(new Event("resize"));
    return () => {
      cleanup();
    };
  }, []);

  return (
     <div className="relative bg-gradient-to-r from-darkLeft to-darkRight w-screen min-h-screen overflow-hidden max-w-full">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full min-h-full"
        />
      <Navbar />
      <main>
          <Home />
          <About />
          <Services />
          <Cases />
          <Partners />
          <Contact />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
};

export default LandingPage;
