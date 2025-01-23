import React, { useState, useEffect, useRef } from 'react';

// Définition d'un composant fonctionnel React appelé ContainerWithDimensions
const ContainerWithDimensions: React.FC = () => {
  // Référence à l'élément <section> du DOM qui sera suivi pour détecter les changements de taille
  const containerRef = useRef<HTMLElement>(null);

  // Déclaration d'un état pour stocker les dimensions du conteneur (width et height)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useEffect s'exécute après le montage du composant et met à jour en cas de redimensionnement
  useEffect(() => {
    // Fonction pour mettre à jour les dimensions de l'élément référencé
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,  // Récupération de la largeur de l'élément
          height: containerRef.current.offsetHeight, // Récupération de la hauteur de l'élément
        });
      }
    };

    // Création d'une instance de ResizeObserver pour surveiller les changements de taille
    const observer = new ResizeObserver(() => updateDimensions());

    // Vérifie si la référence est bien attachée à un élément dans le DOM
    if (containerRef.current) {
      observer.observe(containerRef.current); // Commence l'observation des changements de taille
      updateDimensions(); // Mise à jour initiale des dimensions au montage du composant
    }

    // Fonction de nettoyage exécutée lors du démontage du composant
    return () => {
      observer.disconnect(); // Arrête l'observation pour éviter les fuites de mémoire
    };
  }, []); // Le tableau de dépendances vide signifie que cet effet s'exécute uniquement au montage et démontage

  return (
    <section
      ref={containerRef}  // Attache la référence à cette section pour récupérer ses dimensions
      style={{
        width: '60%',           // Définit une largeur de 60% de son conteneur parent
        height: '400px',         // Hauteur fixe de 400px
        backgroundColor: 'lightblue', // Couleur de fond bleu clair
        resize: 'both',          // Permet à l'utilisateur de redimensionner la section (horizontalement et verticalement)
        overflow: 'auto',         // Ajoute une barre de défilement si le contenu dépasse la taille de la section
        border: '2px solid #000', // Ajoute une bordure noire autour de la section
        padding: '20px',          // Ajoute un espacement intérieur pour le contenu
      }}
    >
      {/* Affiche les dimensions actuelles du conteneur */}
      <p>Largeur : {dimensions.width}px</p>
      <p>Hauteur : {dimensions.height}px</p>
      <p>Essaie de redimensionner cette section pour voir les valeurs mises à jour.</p>
    </section>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default ContainerWithDimensions;
