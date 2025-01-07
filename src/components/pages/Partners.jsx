import React, { useEffect, useState, useRef } from "react";
import AWS from "../assets/partners/aws-logo.svg";
import GitHub from "../assets/partners/github-logo.svg";
import HashiCorp from "../assets/partners/hashicorp-logo.svg";
import CodeGPT from "../assets/partners/codegpt-logo.svg";
import Unity from "../assets/partners/unity-logo.svg";
import BankIcon from "../assets/partners/BIAN.png";
import AWSIcon from "../assets/partners/AWS WA.png";
import TOGAFIcon from "../assets/partners/TOGAF.png";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { name: "AWS", logo: AWS },
    { name: "Unity", logo: Unity },
    { name: "HashiCorp", logo: HashiCorp },
    { name: "CodeGPT", logo: CodeGPT },
    { name: "GitHub", logo: GitHub },
  ];

  const frameworks = [
    {
      name: "Bank Industry Architect Network",
      logo: BankIcon,
      description:t("Partners.Frameworks.BIAN") ,
    },
    {
      name: "AWS Well-Architected",
      logo: AWSIcon,
      description:t("Partners.Frameworks.AWS") ,
    },
    {
      name: "TOGAF Framework",
      logo: TOGAFIcon,
      description: t("Partners.Frameworks.TOGAF") ,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      id="partners"
      ref={sectionRef}
      className={`relative z-10 flex flex-col items-center font-helvetica mb-32 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-4xl md:text-6xl text-whiteNeurona font-helvetica mt-32 mb-12">
        {t("Partners.Title")}
      </h1>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-darkLeft p-4 rounded-md flex justify-center items-center w-40 h-20"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full"
            />
          </div>
        ))}
      </div>

      {/* International Architecture Frameworks */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-grayNeurona">
          <h2 className="my-8 text-2xl font-helvetica text-whiteNeurona md:text-4xl">
            {t("Partners.Frameworks.Title")}
          </h2>
          <p className="text-grayNeurona">
            {t("Partners.Frameworks.Subtitle")}
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-darkGrayNeurona overflow-hidden rounded-3xl border text-grayNeurona border-darkGrayNeurona sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="group relative bg-darkLeft transition hover:z-[1] hover:shadow-blueGreen cursor-pointer"
            >
              <div className="relative space-y-8 py-12 p-8">
                {/* Image expands on hover */}
                <img
                  src={framework.logo}
                  alt={framework.name}
                  className="w-12 h-12 rounded-full transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-none"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-helvetica text-whiteNeurona transition group-hover:text-blueGreen">
                    {framework.name}
                  </h5>
                  <p className="text-grayNeurona">{framework.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partners;
