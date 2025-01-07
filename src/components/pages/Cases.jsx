"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoCard = ({ video, isExpanded, onToggle }) => {
  return (
    <motion.div
      className={`relative transition-all duration-500 ease-in-out cursor-pointer bg-darkLeft rounded-xl
    ${
      isExpanded
        ? "w-full md:w-[90vh] min-h-[60vh] z-20"
        : "w-full md:w-[60vh] min-h-[30vh] z-10"
    }
    hover:z-20 group shadow-blueGreen overflow-visible`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      layout
      onClick={onToggle}
    >
      <motion.div
        className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full"
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
          <img
            src={video.logo}
            alt="Logo"
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

        <h3 className="text-xl font-helvetica text-white mt-4">
          {video.title}
        </h3>
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
      </motion.div>
    </motion.div>
  );
};

const Cases = () => {
  const {t} = useTranslation(); 
  const [expandedIndex, setExpandedIndex] = useState(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, []);

  const videos = [
    {
      id: "XUn5-F7Bjb4",
      logo: "https://www.kaumer.com/es/wp-content/uploads/sites/2/2024/08/Logo_Kaumer_2x.png",
      title: t("Cases.Case1.Title"),
      description: t("Cases.Case1.Description")
    },
    
    {
        id: "hf36RSJQQ7E",
        logo: "https://static.wixstatic.com/media/87c39b_40200903dd874f6ca281fa9320f9d9b3~mv2.png/v1/fill/w_195,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo_edited.png",
        title: t("Cases.Case2.Title"),
        description: t("Cases.Case2.Description")
      },
  ];

  const handleMouseDown = (e) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      id="cases"
      ref={observerRef}
      className="relative z-10 flex flex-col md:flex-row justify-center items-center font-helvetica px-4 sm:px-10 md:ml-20"
    >
      <section
        className={`w-full rounded-lg font-helvetica transform transition-transform duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-helvetica text-white text-center mb-8">
          Success Cases
        </h2>
        <div
          ref={carouselRef}
          className="flex flex-col md:flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {videos.map((video, index) => (
              <div key={index} className="snap-start mx-auto md:mx-0">
                <VideoCard
                  video={video}
                  isExpanded={expandedIndex === index}
                  onToggle={() => {
                    if (!isDragging) {
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
