import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Modal from "../utills/Modal";
import Escala from "../../assets/tech/escala.png";
import Primeur from "../../assets/tech/primeur-Data-One.jpg";
import AI from "../../assets/tech/codegpt.png";
import { useTranslation } from "react-i18next";

const Solutions = () => {
    const { t } = useTranslation();
    const [modalData, setModalData] = useState({
      isOpen: false,
      title: "Loading...",
      image: "Loading...",
      description: "Loading...",
    });
  
    const dropdownItems = [
      {
        title: t("NavBar.Technology.Escala.Title"),
        subtitle: t("Dropdown.Technology.Escala.Title"),
        description: t("Dropdown.Technology.Escala.Description"),
        image: Escala,
        modalTitle: t("Dropdown.Technology.Escala.ModalTitle"),
      },
      {
        title: t("NavBar.Technology.Code.Title"),
        subtitle: t("Dropdown.Technology.CodeGPT.Title"),
        description: t("Dropdown.Technology.CodeGPT.Description"),
        image: AI,
        modalTitle: t("Dropdown.Technology.CodeGPT.ModalTitle"),
      },
      {
        title: t("NavBar.Technology.Primeur.Title"),
        subtitle: t("Dropdown.Technology.Primeur.Title"),
        description: t("Dropdown.Technology.Primeur.Description"),
        image: Primeur,
        modalTitle: t("Dropdown.Technology.Primeur.ModalTitle"),
      },
    ];
  
    const handleItemClick = (item) => {
      setModalData({
        isOpen: true,
        title: item.modalTitle,
        image: item.image,
        description: item.description,
      });
    };
  
    const handleCloseModal = () => {
      setModalData({
        isOpen: false,
        title: "",
        image: "",
        description: "",
      });
    };
  
    return (
      <>
        <Dropdown
          title={t("NavBar.Technology.Title")}
          items={dropdownItems}
          handleItemClick={handleItemClick}
        />
      {modalData.isOpen &&(
          <Modal
            isOpen={modalData.isOpen}
            onClose={handleCloseModal}
            title={modalData.title}
            image={modalData.image}
            description={modalData.description}
          />
        )}
      </>
    );
  };
  
  export default Solutions;