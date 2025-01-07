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
    <div id="about" className="text-whiteNeurona font-helvetica">
      {/* Our Vision Section */}
      <section ref={refVision} className="max-w-7xl mx-auto px-10 py-20">
        <div className="flex flex-col md:flex-row items-center relative gap-16">
          {/* Text Content */}
          <div
            className={`transition-transform duration-700 ease-out ${
              inViewVision
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl font-helvetica mb-6 text-blueGreen">
              {" "}
              {t("About.OurVision.Title")}
            </h2>
            <h3 className="text-3xl font-helvetica mb-8 text-whiteNeurona">
              {" "}
              {t("About.OurVision.Subtitle")}
            </h3>
            <p className="text-whiteNeurona leading-relaxed mb-6 max-w-3xl text-lg">
              {t("About.OurVision.Content")}
            </p>
          </div>

          {/* Image Content */}
          <div
            className={`transition-transform duration-700 ease-out ${
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
      </section>

      {/* Why Neurona Section */}
      <section ref={refWhy} className="max-w-7xl mx-auto px-10 py-20">
        <div className="flex flex-col md:flex-row-reverse items-center relative gap-16">
          <div
            className={`transition-transform duration-700 ease-out ${
              inViewWhy
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-right  text-5xl font-helvetica mb-6 text-blueGreen">
              {t("About.WhyNeurona.Title")}
            </h2>
            <h3 className="text-right  text-3xl font-helvetica mb-8 text-whiteNeurona">
              {t("About.WhyNeurona.Subtitle")}
            </h3>
            <p className="text-whiteNeurona leading-relaxed mb-6 max-w-3xl text-lg">
              {t("About.WhyNeurona.Content")}
            </p>
          </div>

          <div
            className={`transition-transform duration-700 ease-out ${
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
      </section>
    </div>
  );
};

export default About;
