"use client";

import React, { useEffect, useState, useRef } from "react";
import AWS from "../assets/partners/aws-logo.svg";
import CodeGPT from "../assets/partners/codegpt-logo.svg";
import Unity from "../assets/partners/unity-logo.svg";
import Escala from "../assets/partners/escala.svg";
import Primeur from "../assets/partners/primeur.svg";
import BankIcon from "../assets/partners/BIAN.png";
import AWSIcon from "../assets/partners/AWS WA.png";
import TOGAFIcon from "../assets/partners/TOGAF.png";

import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { name: "AWS", logo: AWS },
    { name: "Unity", logo: Unity },
    { name: "CodeGPT", logo: CodeGPT },
    { name: "Escala", logo: Escala },
    { name: "Primeur", logo: Primeur },
  ];

  const frameworks = [
    {
      name: "Bank Industry Architect Network",
      logo: BankIcon,
      description: t("Partners.Frameworks.BIAN"),
    },
    {
      name: "AWS Well-Architected",
      logo: AWSIcon,
      description: t("Partners.Frameworks.AWS"),
    },
    {
      name: "TOGAF Framework",
      logo: TOGAFIcon,
      description: t("Partners.Frameworks.TOGAF"),
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className={`min-h-screen flex flex-col items-center font-helvetica mb-32 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-whiteNeurona mt-32 mb-12">
        {t("NavBar.Partners")}
      </h1>

      {/* Partner Logos */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="p-4 rounded-md flex justify-center items-center w-52 h-32 transition-transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full"
            />
          </div>
        ))}
      </div>

      {/* Frameworks Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-16 relative z-10">
        <div className="md:w-2/3 lg:w-1/2 text-grayNeurona">
          <h2 className="my-8 text-2xl md:text-4xl text-whiteNeurona">
            {t("Partners.Frameworks.Title")}
          </h2>
          <p>{t("Partners.Frameworks.Subtitle")}</p>
        </div>
        <div className="mt-16 grid divide-y divide-darkGrayNeurona overflow-hidden rounded-3xl border border-darkGrayNeurona sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="group relative bg-darkLeft transition-all hover:shadow-blueGreen hover:scale-105 cursor-pointer"
            >
              <div className="relative space-y-8 py-12 px-8">
                <img
                  src={framework.logo}
                  alt={framework.name}
                  className="w-12 h-12 rounded-full transition-all duration-300 ease-in-out group-hover:w-48 group-hover:h-48 group-hover:rounded-none"
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-whiteNeurona group-hover:text-blueGreen">
                    {framework.name}
                  </h5>
                  <p className="text-grayNeurona">{framework.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
