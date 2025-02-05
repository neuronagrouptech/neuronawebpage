import React from "react";
import Logo from "../assets/LOGO.avif";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import Flag from "./utills/Flag";

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

  const sections = [
    {
      title: "COMPANY",
      links: [
        { label: "Home", sectionId: "home" },
        { label: "About", sectionId: "about" },
        { label: "Services", sectionId: "services" },
        { label: "Success Cases", sectionId: "partners" },
        { label: "Partners", sectionId: "partners" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Terms & Conditions", sectionId: "terms" },
        { label: "Privacy Policy", sectionId: "privacy" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/neurona-company/",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 mr-2 transition" />,
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      href: "https://www.instagram.com/neurona.global/",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5 mr-2 transition" />,
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      href: "https://www.youtube.com/@NeuronaEnterprise/videos",
      label: "YouTube",
      icon: <Youtube className="w-5 h-5 mr-2 transition" />,
      hoverColor: "hover:text-[#FF0000]",
    },
  ];

  const locations = [
    { city: "Valparaiso", country: "Chile", flag: "CL" },
    { city: "Dubai", country: "United Arab Emirates", flag: "AE" },
    { city: "Tallin", country: "Estonia", flag: "EE" },
  ];

  return (
    <footer className="bg-darkLeft text-whiteNeurona py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img
              src={Logo}
              alt="Logo Neurona"
              className="w-60 h-28 object-contain cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-2 lg:space-y-3">
              <h4 className="text-lg font-bold font-sans">{section.title}</h4>
              <ul className="space-y-1 lg:space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.sectionId)}
                      className="hover:text-blueGreen font-sans transition text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Section */}
          <div className="flex flex-col space-y-2 lg:space-y-3">
            <h4 className="text-lg font-bold font-sans">SOCIAL</h4>
            <ul className="space-y-1 lg:space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`inline-flex items-center font-sans transition cursor-pointer group ${link.hoverColor}`}
                  >
                    {React.cloneElement(link.icon, {
                      className: `w-5 h-5 mr-2 transition text-white group-hover:text-current`,
                    })}
                    <span className="group-hover:underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Section */}
          <div className="flex flex-col space-y-2 lg:space-y-3">
            <h4 className="text-lg font-bold font-sans">LOCATIONS</h4>
            <ul className="space-y-1 lg:space-y-2">
              {locations.map((location) => (
                <li key={`${location.city}-${location.country}`} className="flex items-center space-x-2">
                  <Flag country={location.flag} />
                  <span>
                    {location.city ? `${location.city}, ` : ""}
                    {location.country}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
