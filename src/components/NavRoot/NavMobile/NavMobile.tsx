import "./NavMobile.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

import drapFrancais from "../../../assets/data-img/drapeau-français.png"
import drapAnglais from "../../../assets/data-img/drapeau-anglais.png"
import mail from "../../../assets/data-img/mail-icon.webp"
import github from "../../../assets/data-img/github-icon.png"
import linkedin from "../../../assets/data-img/linkedin-icon.png"

function NavMobile() {
    const [active, setActive] = useState(false)
    const funcActive = () => {
        setActive(!active)
    }
    return (
        <>
             <nav className="NavMobile">
                 <Link to="/home">
                     <h1 id="AutorMobile">Ryan DECIAN</h1>
                 </Link>
                 <h3>Développeur web full stack junior</h3>
                 <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                     <div>
                         <a href="#" 
                         id="closeBtn" 
                         className="close"
                         onClick={funcActive}>x</a>
                     </div>

                     {/*Le style de ce composant est directement géré par le module CSS :
                     MenuNavRoot.module.css*/}
                     <MenuNavRoot
                         moduleMenuUl={style.MenuUlMobile}
                         moduleMenuLi={style.MenuLiMobile}
                         moduleMenuLink={style.MenuLinkMobile}
                     />

                     <section>
                         <div className="IconNavMobile">
                             <img src={drapFrancais} alt="Langue français"/>
                         </div>
                         <div className="IconNavMobile">
                             <img src={drapAnglais} alt="English language"/> 
                         </div>
                     </section>

                 </div>

                 <a href="#" 
                 id="openBtn"
                 onClick={funcActive}>
                    <span className="menuBurger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                 </a>

             </nav>
        </>
    )
}
export default NavMobile;