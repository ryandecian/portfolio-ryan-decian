import { useState } from "react";
import "./Nav.css"
import { Outlet, Link } from "react-router-dom";
import drapAnglais from "../../public/data-img/drapeau-anglais.png"
import drapFrancais from "../../public/data-img/drapeau-français.png"

function Nav() {
    const [active, setActive] = useState(false)
    const funcActive = () => {
        setActive(!active)
    }

    return (

     <header>
         <nav className="navigation">

             <div className="nav-desktop">


                 <section>
                     <div className="languageFR">
                         <img src={drapFrancais} alt="Langue français"/>
                     </div>
                     <div className="languageEN">
                         <img src={drapAnglais} alt="English language"/> 
                     </div>
                 </section>

                 <ul>
                     <li><a href="#">Contacts</a></li>
                     <li><a href="#">Expériances</a></li>
                     <li><a href="#">Projets</a></li>
                 </ul>
             
             </div>


             <div className="nav-mobile">
                 <h1 id="Autor">Ryan DECIAN</h1>
                 <h3>Développeur web full stack junior</h3>
                 <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                     <div>
                         <a href="#" 
                         id="closeBtn" 
                         className="close"
                         onClick={funcActive}>x</a>
                     </div>

                     <ul className="menu">
                         <li><a href="#">Contacts</a></li>
                         <li><a href="#">Expériances</a></li>
                         <li><a href="#">Projets</a></li>
                     </ul>

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
             </div>


         </nav>
     </header>
)}

export default Nav;