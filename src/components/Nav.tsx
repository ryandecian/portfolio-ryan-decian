import { useState } from "react";
import "./Nav.css"
import { Outlet, Link } from "react-router-dom";

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


             <div className="nav-mobile">
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
         <Link to="/">Home</Link>
     </header>
)}

export default Nav;