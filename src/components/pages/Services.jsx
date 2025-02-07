import { useState, useEffect, useRef, Suspense, useMemo, memo, useCallback } from "react"; 
import { useTranslation } from "react-i18next";
import ServiceCard from "./services/ServiceCard";
import ServiceModal from "./services/ServiceModal";
import IAThumb from "../assets/services/thumbnails/IA-thumb.webp";
import XRThumb from "../assets/services/thumbnails/XR-thumb.webp";
import DVThumb from "../assets/services/thumbnails/DV-thumb.webp";
import ARThumb from "../assets/services/thumbnails/AR-thumb.webp";
import IAImage from "../assets/services/IA.webp";
import XRImage from "../assets/services/XR.webp";
import DVImage from "../assets/services/DV.webp";
import ARImage from "../assets/services/AR.webp";

const servicesData = [
  { thumb: IAThumb, image: IAImage, key: "AIDataStudio" },
  { thumb: DVThumb, image: DVImage, key: "InnovationProductStudio" },
  { thumb: XRThumb, image: XRImage, key: "SoftwareDevelopmentStudio" },
  { thumb: ARThumb, image: ARImage, key: "EnterpriseTechArchitecture" },
];

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadHighQuality, setLoadHighQuality] = useState(false);

  const services = useMemo(
    () =>
      servicesData.map(({ thumb, image, key }) => ({
        thumbnail: thumb,
        image,
        title: t(`Services.${key}.Title`),
        subtitle: t(`Services.${key}.Subtitle`),
        details: t(`Services.${key}.Details`),
      })),
    [t]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setLoadHighQuality(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '100px' });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = useCallback((index) => {
    setSelectedService(prev => (prev === index ? null : services[index]));
  }, [services]);

  return (
    <section id="services" ref={sectionRef} className={`min-h-screen md:p-12 pt-28 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto pt-28">
        <h1 className="text-4xl md:text-6xl text-center mb-12 md:mb-24 text-whiteNeurona">
          {t("Services.Title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={{ ...service, image: loadHighQuality ? service.image : service.thumbnail }}
              index={index}
              isVisible={isVisible}
              selectedService={selectedService}
              onServiceClick={handleServiceClick}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        {selectedService && <ServiceModal isOpen onClose={() => setSelectedService(null)} {...selectedService} />}
      </Suspense>
    </section>
  );
};

export default memo(Services);