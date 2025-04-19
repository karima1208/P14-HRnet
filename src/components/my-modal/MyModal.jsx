import React from "react";
import "./styles.css";

// Composant de modal personnalisé pour afficher un message de confirmation
const MyModal = ({ openModal, setOpenModal }) => {
  // Si la modal n'est pas ouverte, on ne retourne rien (elle ne s'affiche pas)
  if (!openModal) return null;

  // Fonction pour fermer la modal
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    // Overlay (fond assombri) — clique dessus pour fermer la modal
    <div className="custom-modal-overlay" onClick={closeModal}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la modal
      >
        {/* Bouton pour fermer la modal */}
        <button className="custom-modal-close" onClick={closeModal}>
          &times; {/* Symbole "X" */}
        </button>

        {/* Message de confirmation */}
        <p className="modalText">Employee Created!</p>
      </div>
    </div>
  );
};

export default MyModal;
