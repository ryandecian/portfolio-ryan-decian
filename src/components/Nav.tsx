import { useState } from "react";
import "./Nav.css"


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
                         <img/>
                     </div>
                     <div className="languageEN">
                         <img/> 
                     </div>
                 </section>

                 <ul>
                     <li><a href="#">Contacts</a></li>
                     <li><a href="#">Expériances</a></li>
                     <li><a href="#">Projets</a></li>
                 </ul>
             </div>

             <div  className={`sideNav ${active ? "active" : ""}`} id="mySideNav">

                 <a href="#" 
                 id="closeBtn" 
                 className="close"
                 onClick={funcActive}>x</a>

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

         </nav>
     </header>
)}

export default Nav;