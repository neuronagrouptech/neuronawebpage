import React, { useState, useEffect } from "react";
import DesktopLinks from "../common/navbar/DesktopLinks";
import MobileMenu from "../common/navbar/MobileMenu";
import Modal from "../common/utills/Modal";
import { useTranslation } from "react-i18next";
import Logo from "../assets/LOGO.avif";

const Navbar = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Agregar eventos
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup de eventos
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModalOpen = (title, description, image, isContact = false) => {
    setModalContent({ title, description, image, isContact });
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 px-8 py-5 flex items-center justify-between transition-colors duration-300 ${
        isScrolled ? "bg-darkLeft bg-opacity-80 backdrop-blur" : "bg-transparent"
      }`}
      style={{ height: "64px" }}
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo Neurona"
        className="w-36 h-10 object-contain mx-auto md:mx-0 md:ml-20"
      />

      {/* Enlaces para escritorio */}
      <DesktopLinks
        handleModalOpen={handleModalOpen}
        t={t}
        isScrolled={isScrolled}
      />

      {/* Botón de menú móvil */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-whiteNeurona text-2xl"
      >
        ☰
      </button>

      {/* Menú móvil */}
      {isMenuOpen && (
        <MobileMenu
          handleModalOpen={handleModalOpen}
          t={t}
          closeMenu={() => setIsMenuOpen(false)}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={modalContent?.title}
        description={modalContent?.description}
        image={modalContent?.image}
        isContact={modalContent?.isContact}
      />
    </nav>
  );
};

export default Navbar;
