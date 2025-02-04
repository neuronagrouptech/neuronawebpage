import React, { useState, useEffect } from "react";
import Video from "../assets/home/Home_Video.mp4";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const messages = [
    {
      title: t("Home.messages.0.title"),
      subtitle: t("Home.messages.0.subtitle"),
      details: t("Home.messages.0.details"),
    },
    {
      title: t("Home.messages.1.title"),
      subtitle: t("Home.messages.1.subtitle"),
      details: t("Home.messages.1.details"),
    },
    {
      title: t("Home.messages.2.title"),
      subtitle: t("Home.messages.2.subtitle"),
      details: t("Home.messages.2.details"),
    },
  ];
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("opacity-100 scale-100 translate-y-0");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("opacity-0 scale-95 translate-y-10"); 
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimationClass("opacity-100 scale-100 translate-y-0"); 
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-start text-whiteNeurona px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {!isMobile && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
        </video>
      )}
      {/* Capa de oscurecimiento */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Contenido principal con animaciones disruptivas */}
      <div className="relative z-10 max-w-2xl md:max-w-3xl lg:max-w-4xl text-left">
        <div className={`transition-all duration-700 ease-in-out ${animationClass}`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {messages[currentMessageIndex].title}
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6">
            {messages[currentMessageIndex].subtitle}
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-semibold">
            {messages[currentMessageIndex].details}
          </p>
        </div>
        <button 
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-4 sm:mt-6 px-6 py-3 border border-whiteNeurona text-whiteNeurona text-base sm:text-lg font-medium rounded-md hover:bg-blueGreen hover:border-blueGreen transition-all"
        >
          {t("Home.Button")}
        </button>
      </div>
    </div>
  );
};

export default Home;
