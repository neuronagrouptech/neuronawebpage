import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import IA from "../assets/services/IA.jpg";
import XR from "../assets/services/XR.jpg";
import DV from "../assets/services/DV.jpg";
import AR from "../assets/services/AR.png";
import ServiceModal from "./services/ServiceModal";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      image: IA,
      title: t("Services.AIDataStudio.Title"),
      subtitle: t("Services.AIDataStudio.Subtitle"),
      details: t("Services.AIDataStudio.Details"),
    },
    {
      image: DV,
      title: t("Services.InnovationProductStudio.Title"),
      subtitle: t("Services.InnovationProductStudio.Subtitle"),
      details: t("Services.InnovationProductStudio.Details"),
    },
    {
      image: XR,
      title: t("Services.SoftwareDevelopmentStudio.Title"),
      subtitle: t("Services.SoftwareDevelopmentStudio.Subtitle"),
      details: t("Services.SoftwareDevelopmentStudio.Details"),
    },
    {
      image: AR,
      title: t("Services.EnterpriseTechArchitecture.Title"),
      subtitle: t("Services.EnterpriseTechArchitecture.Subtitle"),
      details: t("Services.EnterpriseTechArchitecture.Details"),
    },
  ];

  const handleServiceClick = (index) => {
    if (window.innerWidth >= 1024) {
      setSelectedService(services[index]);
    } else {
      if (selectedService === index) {
        setSelectedService(null);
      } else {
        setSelectedService(index);
        setTimeout(() => {
          const cardElement = document.getElementById(`service-card-${index}`);
          if (cardElement) {
            cardElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`min-h-screen md:p-12 transition-all duration-1000 ease-in-out pt-28 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto pt-28">
        <motion.h1 
          className="text-4xl md:text-6xl text-center mb-12 md:mb-24 text-whiteNeurona "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("Services.Title")}
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={`service-card-${index}`}
              className={`relative w-full bg-darkLeft rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blueGreen ${
                selectedService === index ? "h-auto" : "h-[380px]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <button
                className="w-full h-[380px] relative group"
                onClick={() => handleServiceClick(index)}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-darkLeft bg-opacity-80 text-whiteNeurona flex justify-between items-center backdrop-blur-md">
                  <span className="text-lg font-semibold tracking-wide">{service.title}</span>
                  {selectedService === index ? (
                    <Minus className="w-6 h-6 text-blueGreen" />
                  ) : (
                    <Plus className="w-6 h-6 text-blueGreen" />
                  )}
                </div>
              </button>

              {selectedService === index && (
                <motion.div 
                  className="p-6 text-whiteNeurona bg-darkLeft rounded-b-2xl transition-opacity duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <p className="text-lg leading-relaxed mb-4 text-grayNeurona">
                    {service.subtitle}
                  </p>
                  <div className="border-t border-grayNeurona pt-4">
                    <ul className="space-y-3">
                      {service.details?.map((detail, index) => (
                        <li
                          key={index}
                          className="text-whiteNeurona text-base leading-relaxed flex items-start"
                        >
                          <span className="w-3 h-3 bg-blueGreen rounded-full mt-2 mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService && typeof selectedService !== "number"}
            onClose={() => setSelectedService(null)}
            image={selectedService?.image}
            title={selectedService?.title}
            description={selectedService?.subtitle}
            details={selectedService?.details}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
