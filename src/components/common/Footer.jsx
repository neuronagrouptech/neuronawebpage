import React from "react";
import Logo from "../assets/LOGO.avif";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <footer className="bg-darkLeft text-whiteNeurona py-10 relative z-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="LogoNeurona"
            className="w-80 h-42 object-contain mb-4 cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Company Section */}
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-4 font-helvetica">COMPANY</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("partners")}
                className={
                  "hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
                }
              >
                Success Cases
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("partners")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                Partners
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-4 font-helvetica">LEGAL</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("terms")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("privacy")}
                className="hover:text-blueGreen font-helvetica transition text-left cursor-pointer"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="relative z-10">
          <h4 className="text-lg font-bold mb-4 font-helvetica">SOCIAL</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/neurona-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-helvetica transition cursor-pointer group"
              >
                <Linkedin className="w-5 h-5 mr-2 transition group-hover:text-[#0A66C2]" />
                <span className="transition group-hover:text-[#0A66C2]">
                  LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/neurona.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-helvetica transition cursor-pointer group"
              >
                <Instagram className="w-5 h-5 mr-2 transition group-hover:text-[#E4405F]" />
                <span className="transition group-hover:text-[#E4405F]">
                  Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@NeuronaEnterprise/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-helvetica transition cursor-pointer group"
              >
                <Youtube className="w-5 h-5 mr-2 transition group-hover:text-[#FF0000]" />
                <span className="transition group-hover:text-[#FF0000]">
                  YouTube
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
