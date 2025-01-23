import "./NavPC.css"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"
import IconNavRoot from "../ComponentsNavRoot/IconNavRoot"
import StyleIcon from "../ComponentsNavRoot/IconNavRoot.module.css"
import { useState, useEffect, useRef } from 'react';
import BilleM7 from "../../CanvasRoot/BilleM7/BilleM7"

function NavPC() {

    /* Logique de récupération des dimention de Nav */

     // Détection les changements de dimension de la balise cible
         const containerRef = useRef<HTMLElement>(null);

     // Stockage des dimensions de la balise cible
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
        <nav className="NavPC" ref={containerRef}>
            
             <BilleM7 
             widthBilleM7={dimensions.width}
             heightBilleM7={dimensions.height}
             />

             <div className="NavTopPC">

                 <IconNavRoot
                 iconNav={StyleIcon.IconNavPC}
                 />

                 {/*Le style de ce composant est directement géré par le module CSS :
                 MenuNavRoot.module.css*/}
                 <MenuNavRoot
                     moduleMenuUl={style.MenuUlPC}
                     moduleMenuLi={style.MenuLiPC}
                     moduleMenuLink={style.MenuLinkPC}
                 />

             </div>


             <section className="NavBottomPC">
                <Link to="/home">
                     <h1>Ryan DECIAN</h1>
                </Link>
                 <h3>Développeur web full stack junior</h3>
             </section>
        </nav>
    )
}

export default NavPC;