import { memo, useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = memo(({ service, index, isVisible, selectedService, onServiceClick, priority = false }) => {
  const isSelected = selectedService === index;
  const [imageSrc, setImageSrc] = useState(service.thumbnail);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (service.image && !priority) {
      const img = new Image();
      img.src = service.image;
      img.onload = () => {
        setImageSrc(service.image);
        setIsLoading(false);
      };
    } else {
      setIsLoading(false);
    }
  }, [service.image, priority]);

  return (
    <motion.div
      id={`service-card-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ delay: index * 0.1 }}
      className={`relative w-full bg-darkLeft rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blueGreen ${isSelected ? "h-auto" : "h-[380px]"}`}
    >
      <button
        className="w-full h-[380px] relative group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blueGreen"
        onClick={() => onServiceClick(index)}
      >
        <div className="relative w-full h-full">
          <img
            src={service.thumbnail}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover blur-sm scale-105 transition-opacity duration-300 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading={priority ? "eager" : "lazy"}
          />
          <img
            src={imageSrc}
            alt={service.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} group-hover:scale-110`}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-darkLeft bg-opacity-80 text-whiteNeurona flex justify-between items-center backdrop-blur-md">
          <span className="text-lg font-semibold tracking-wide line-clamp-3">
            {service.title}
          </span>
          {isSelected ? <Minus className="w-6 h-6 text-blueGreen flex-shrink-0" /> : <Plus className="w-6 h-6 text-blueGreen flex-shrink-0" />}
        </div>
      </button>
      <AnimatePresence>
        {isSelected && (
          <motion.div 
            className="p-6 text-whiteNeurona bg-darkLeft rounded-b-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="text-lg leading-relaxed mb-4 text-grayNeurona">
              {service.subtitle}
            </p>
            <div className="border-t border-grayNeurona pt-4">
              <ul className="space-y-3">
                {service.details?.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-whiteNeurona text-base leading-relaxed flex items-start">
                    <span className="w-3 h-3 bg-blueGreen rounded-full mt-2 mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
