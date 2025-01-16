// Navbar.js
import React, { useState, useEffect } from "react";
import DesktopLinks from "../common/navbar/DesktopLinks";
import MobileMenu from "../common/navbar/MobileMenu";
import Modal from "../common/utills/Modal";
import Contact from "../pages/Contact";
import { useTranslation } from "react-i18next";
import Logo from "../assets/LOGO.avif";

const Navbar = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModalOpen = (title, description, image) => {
    setModalContent({ title, description, image });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const closeMenu=()=> setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 px-8 py-5 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-darkLeft bg-opacity-80 backdrop-blur" : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      <img
        src={Logo}
        alt="Logo Neurona"
        className="w-36 h-10 object-contain mx-auto md:mx-0 md:ml-20"
      />

      <DesktopLinks
        handleModalOpen={handleModalOpen}
        t={t}
        isScrolled={isScrolled}
      />

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-whiteNeurona text-2xl"
      >
        ☰
      </button>

      {isMenuOpen && <MobileMenu handleModalOpen={handleModalOpen} t={t} closeMenu={closeMenu} />}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2 className="text-lg font-bold mb-4">{modalContent.title}</h2>
        <img
          src={modalContent.image}
          alt={modalContent.title}
          className="w-full h-auto mb-4"
        />
        <p className="text-gray-700 mb-4">{modalContent.description}</p>
        <Contact />
      </Modal>
    </nav>
  );
};

export default Navbar;