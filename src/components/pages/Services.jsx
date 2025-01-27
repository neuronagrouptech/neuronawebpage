import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Brain, Lightbulb, Code, Landmark} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./services/ServiceCard";
import { NextArrow, PrevArrow } from "./services/Arrows";

const Services = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-30px", display: "flex", justifyContent: "left" }}>
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Brain className="w-24 h-24 text-whiteNeurona" />,
      service: {
        title: t("Services.AIDataStudio.Title"),
        subtitle: t("Services.AIDataStudio.Subtitle"),
        details: t("Services.AIDataStudio.Details"),
      },
    },
    {
      icon: <Lightbulb className="w-24 h-24 text-whiteNeurona" />,
      service: {
        title: t("Services.InnovationProductStudio.Title"),
        subtitle: t("Services.InnovationProductStudio.Subtitle"),
        details: t("Services.InnovationProductStudio.Details"),
      },
    },
    {
      icon: <Code className="w-24 h-24 text-whiteNeurona" />,
      service: {
        title: t("Services.SoftwareDevelopmentStudio.Title"),
        subtitle: t("Services.SoftwareDevelopmentStudio.Subtitle"),
        details: t("Services.SoftwareDevelopmentStudio.Details"),
      },
    },
    {
      icon: <Landmark className="w-24 h-24 text-whiteNeurona" />,
      service: {
        title: t("Services.EnterpriseTechArchitecture.Title"),
        subtitle: t("Services.EnterpriseTechArchitecture.Subtitle"),
        details: t("Services.EnterpriseTechArchitecture.Details"),
      },
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`min-h-screen md:p-12 transition-all duration-1000 ease-in-out pt-28 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-center mb-12 md:mb-24 text-whiteNeurona">
          {t("Services.Title")}
        </h1>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <ServiceCard
                icon={service.icon}
                service={service.service}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
