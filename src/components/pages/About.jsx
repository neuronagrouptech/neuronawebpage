import React from "react";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/about/1.png";
import Image2 from "../assets/about/2.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  // Intersection Observers
  const [refVision, inViewVision] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [refWhy, inViewWhy] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="text-whiteNeurona font-sans pt-28"
    >
      {/* Contenedor General */}
      <div className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col gap-32">
        {/* Our Vision */}
        <div
          ref={refVision}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Texto */}
          <div
            className={`flex-1 transition-transform duration-700 ease-out ${
              inViewVision
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-sans mb-6 text-blueGreen">
              {t("About.OurVision.Title")}
            </h2>
            <h3 className="text-2xl md:text-3xl font-sans mb-8">
              {t("About.OurVision.Subtitle")}
            </h3>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl">
              {t("About.OurVision.Content")}
            </p>
          </div>

          {/* Imagen */}
          <div
            className={`flex-1 transition-transform duration-700 ease-out ${
              inViewVision
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <img
              src={Image1}
              alt="AI Eye"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* Why Neurona */}
        <div
          ref={refWhy}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          {/* Texto */}
          <div
            className={`flex-1 transition-transform duration-700 ease-out ${
              inViewWhy
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-right text-4xl md:text-5xl font-sans font-bold mb-6 text-blueGreen">
              {t("About.WhyNeurona.Title")}
            </h2>
            <h3 className="text-right text-2xl md:text-3xl font-sans font-bold mb-8">
              {t("About.WhyNeurona.Subtitle")}
            </h3>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl">
              {t("About.WhyNeurona.Content")}
            </p>
          </div>

          {/* Imagen */}
          <div
            className={`flex-1 transition-transform duration-700 ease-out ${
              inViewWhy
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <img
              src={Image2}
              alt="Robot handshake"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
