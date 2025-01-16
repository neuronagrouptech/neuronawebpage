import { useState, useRef, useEffect } from "react";
import { Brain, Lightbulb, Code, Plus, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ icon, service, isExpanded, onToggle }) => (
  <motion.div
    className={`relative transition-all duration-500 ease-in-out cursor-pointer bg-darkLeft rounded-xl 
                hover:z-20 shadow-blueGreen overflow-hidden w-72 md:w-[580px] min-h-[450px] ${
                  isExpanded ? "z-20 scale-105" : "z-10 scale-100"
                }`}
    layout
    onClick={onToggle}
  >
    <motion.div
      className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <motion.div
          className={`flex items-center justify-center text-whiteNeurona bg-transparent rounded-full 
                      ${
                        isExpanded
                          ? "w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                          : "w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
                      }`}
          layout
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {icon}
        </motion.div>
        <button className="text-grayNeurona hover:text-whiteNeurona transition-colors mt-4 md:mt-0">
          <Plus className="h-6 w-6" />
        </button>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-light text-whiteNeurona mb-3 tracking-wide">
          {service.title}
        </h3>
        <p className="text-grayNeurona text-sm md:text-base font-light mb-3 leading-relaxed">
          {service.subtitle}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-3 space-y-3"
          >
            {service.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blueGreen mt-2 flex-shrink-0" />
                <p className="text-grayNeurona text-sm leading-relaxed">
                  {detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </motion.div>
);

const Services = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`min-h-screen md:p-12 transition-all duration-1000 ease-in-out pt-28 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-center mb-12 md:mb-24 text-whiteNeurona">
          {t("Services.Title")}
        </h1>
        <div
          ref={carouselRef}
          className="flex flex-col md:flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="flex flex-col md:flex-row gap-6 py-12 w-full">
            {services.map((service, index) => (
              <div key={index} className="snap-start mx-auto md:mx-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;