import React from "react";
import "./styles.css";

const MyModal = ({ openModal, setOpenModal }) => {
  if (!openModal) return null;

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="custom-modal-overlay" onClick={closeModal}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()} // empêcher fermeture si on clique à l'intérieur
      >
        <button className="custom-modal-close" onClick={closeModal}>
          &times;
        </button>
        <p className="modalText">Employee Created!</p>
      </div>
    </div>
  );
};

export default MyModal;
