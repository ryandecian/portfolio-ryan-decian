import "./NavPC.css";
import { Link } from "react-router-dom";
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot";
import style from "../ComponentsNavRoot/MenuNavRoot.module.css";
import IconNavRoot from "../ComponentsNavRoot/IconNavRoot";
import StyleIcon from "../ComponentsNavRoot/IconNavRoot.module.css";
import { useState, useEffect, useRef } from 'react';
import BilleM7 from "../../CanvasRoot/BilleM7/BilleM7";

function NavPC() {

    /* Logique de récupération des dimensions de la balise <nav> */

    // Référence vers la balise <nav>
    const containerRef = useRef<HTMLElement>(null);

    // Stockage des dimensions avec des valeurs initiales à 0
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
console.log(dimensions)
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        // Vérification si l'élément est bien monté dans le DOM
        if (containerRef.current) {
            updateDimensions(); // Mise à jour immédiate des dimensions
        }

        // Création d'un ResizeObserver pour suivre les changements de taille
        const observer = new ResizeObserver(() => updateDimensions());
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Nettoyage de l'observateur lors du démontage du composant
        return () => {
            observer.disconnect();
        };
    }, []); // Exécuté uniquement au montage

    return (
        <nav className="NavPC" ref={containerRef}>
            
            {/* Vérification et transmission des dimensions uniquement après leur récupération */}
            {dimensions.width > 0 && dimensions.height > 0 ? (
                <BilleM7 
                    widthBilleM7={dimensions.width}
                    heightBilleM7={dimensions.height}
                />
            ) : (
                <p>Chargement des dimensions...</p>
            )}

            <div className="NavTopPC">
                <IconNavRoot
                    iconNav={StyleIcon.IconNavPC}
                />

                {/* Le style de ce composant est directement géré par le module CSS */}
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
    );
}

export default NavPC;
