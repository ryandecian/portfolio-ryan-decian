import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect, useRef } from 'react';
import BilleM7 from "./components/CanvasRoot/BilleM7/BilleM7";

function App() {
  /* Logique de récupération des dimensions de la balise <nav> */

  // Référence vers la balise <div className="AppContainer">
  const containerRef = useRef<HTMLDivElement>(null);

  // Stockage des dimensions avec des valeurs initiales nulles (pas encore connues)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // État pour vérifier si le composant est complètement monté
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Vérifie si la référence est bien attachée au DOM
    if (containerRef.current) {
      updateDimensions(); // Mise à jour immédiate après le montage
    }

    // Création d'un ResizeObserver pour surveiller les changements de dimensions
    const observer = new ResizeObserver(() => updateDimensions());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Marque le composant comme monté après l'observation
    setIsMounted(true);

    // Nettoyage de l'observateur lors du démontage
    return () => {
      observer.disconnect();
    };
  }, []); // Exécuté uniquement au montage

  return (
    <div className="AppContainer" ref={containerRef}>
      {/* Affichage du contenu uniquement après le montage complet */}
      {isMounted && dimensions.width > 0 && dimensions.height > 0 ? (
        <BilleM7
          widthBilleM7={dimensions.width}
          heightBilleM7={dimensions.height}
        />
      ) : (
        <p>Chargement des dimensions...</p>
      )}
      <Outlet />
    </div>
  );
}

export default App;
