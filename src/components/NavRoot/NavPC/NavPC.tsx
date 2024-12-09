import "./NavPC.css"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

import drapFrancais from "../../../assets/data-img/drapeau-français.png"
import drapAnglais from "../../../assets/data-img/drapeau-anglais.png"
import mail from "../../../assets/data-img/mail-icon.webp"

function NavPC() {

    return (
        <nav className="NavPC">
             <div className="NavTopPC">

                 <section>
                     <div className="languageFR">
                         <img src={drapFrancais} alt="Langue français"/>
                     </div>
                     <div className="languageEN">
                         <img src={mail} alt="English language"/> 
                     </div>
                 </section>

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
                     <h1 id="Autor">Ryan DECIAN</h1>
                </Link>
                 <h3>Développeur web full stack junior</h3>
             </section>
        </nav>
    )
}

export default NavPC;