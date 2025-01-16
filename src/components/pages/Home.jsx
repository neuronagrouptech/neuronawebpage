import React from "react";
import { ChevronDown } from "lucide-react";
import NeuronaLogo from "../assets/LOGO.avif";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  // Función para desplazarse a la siguiente sección
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center ">
      {/* Contenido principal del Home */}
      <div   
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-8"
      >
        {/* Título principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-sans text-whiteNeurona font-bold tracking-wide drop-shadow-lg">
          {t("Home.Title1")} <br /> {t("Home.Title2")}
        </h1>
        {/* Subtítulo */}
        <p className="text-whiteNeurona text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-sm font-sans">
          {t("Home.Subtitle1")}{" "}
          <span className="font-semibold text-blueGreen">NEURONA</span>{" "}
          {t("Home.Subtitle2")}
        </p>
        {/* Logo visible solo en dispositivos móviles */}
        <img
          src={NeuronaLogo}
          alt="Company Logo"
          className="block sm:hidden w-4/5 mt-4 animate-pulse"
        />
        {/* Botón circular */}
        <button
          onClick={scrollToNextSection}
          className="mt-8 w-14 h-14 flex items-center justify-center rounded-full bg-whiteNeurona hover:bg-blueGreen shadow-lg transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="text-blueGreen hover:text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Home;
