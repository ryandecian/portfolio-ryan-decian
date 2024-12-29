import React, { useState } from "react";

const VoirPlus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", background: "red", }}>
      {/* Bouton Voir Plus */}
      <button
        onClick={toggleWindow}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #007BFF",
          backgroundColor: "#007BFF",
          color: "#fff",
        }}
      >
        {isOpen ? "Voir moins" : "Voir plus"}
      </button>

      {/* Petite fenêtre */}
      {isOpen && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            margin: "auto",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0" }}>Informations supplémentaires</h4>
          <p>
            Voici quelques informations intéressantes. Vous pouvez ajouter tout
            ce que vous voulez ici, comme des détails, des images, ou des liens
            vers d'autres ressources.
          </p>
        </div>
      )}
    </div>
  );
};

export default VoirPlus;
