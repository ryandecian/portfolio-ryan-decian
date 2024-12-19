import "./NavPC.css"
import { Link } from "react-router-dom"
import MenuNavRoot from "../ComponentsNavRoot/MenuNavRoot"
import style from "../ComponentsNavRoot/MenuNavRoot.module.css"

import drapFrancais from "../../../assets/data-img/drapeau-français.png"
import drapAnglais from "../../../assets/data-img/drapeau-anglais.png"
import mail from "../../../assets/data-img/mail-icon.webp"
import github from "../../../assets/data-img/github-icon.png"
import linkedin from "../../../assets/data-img/linkedin-icon.png"

function NavPC() {

    return (
        <nav className="NavPC">
             <div className="NavTopPC">

                 <section>
                     <div className="IconNavPC">
                         <img src={github} alt="GitHub"/>
                     </div>
                     <div className="IconNavPC">
                         <img src={linkedin} alt="Linkedin"/> 
                     </div>
                     <div className="IconNavPC">
                         <img src={mail} alt="Mail"/> 
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