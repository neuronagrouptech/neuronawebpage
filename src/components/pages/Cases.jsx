"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoCard = ({ video, isExpanded, onToggle }) => {
  return (
    <motion.div
      className={`relative transition-all duration-500 ease-in-out cursor-pointer bg-darkLeft rounded-xl shadow-blueGreen overflow-visible 
        w-72 md:w-[60vh] min-h-[30vh] ${
          isExpanded ? "z-20 scale-105" : "z-10 scale-100"
        }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      onClick={onToggle}
    >
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        {/* Logo */}
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
          <img
            src={video.logo}
            alt={`${video.title} Logo`}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Video */}
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Title */}
        <h3 className="text-xl font-helvetica text-white mt-4">
          {video.title}
        </h3>

        {/* Description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              className="mt-3"
            >
              <p className="text-gray-300 text-sm">{video.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Cases = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentCarousel = carouselRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (currentCarousel) observer.observe(currentCarousel);

    return () => {
      if (currentCarousel) observer.unobserve(currentCarousel);
    };
  }, []);

  const videos = [
    {
      id: "XUn5-F7Bjb4",
      logo: "https://www.kaumer.com/es/wp-content/uploads/sites/2/2024/08/Logo_Kaumer_2x.png",
      title: t("Cases.Case1.Title"),
      description: t("Cases.Case1.Description"),
    },
    {
      id: "hf36RSJQQ7E",
      logo: "https://static.wixstatic.com/media/87c39b_40200903dd874f6ca281fa9320f9d9b3~mv2.png",
      title: t("Cases.Case2.Title"),
      description: t("Cases.Case2.Description"),
    },
  ];

  return (
    <section
      id="cases"
      className={`min-h-screen font-helvetica px-4 sm:px-10 md:px-20 transition-all duration-1000 ease-in-out pt-28 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h2 className="text-4xl md:text-6xl text-white text-center mb-8">
        {t("Cases.Title")}
      </h2>
      <div
        ref={carouselRef}
        className="flex flex-wrap justify-center gap-6 py-12"
      >
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            isExpanded={expandedIndex === index}
            onToggle={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Cases;
