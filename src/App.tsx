import Nav from "./components/Nav"
import { Outlet, Link } from "react-router-dom";

/*Import des fichiers CSS*/
import "./App.css"
import "./light.css"



function App() {

  return (
   <div>
       <Nav/>

       <section className="container-link">
         <Link to="/" className="Link">Home</Link>
         <Link to="/about" className="Link">About</Link>
         <Link to="/grid" className="Link">Grid</Link>
       </section>

       <Outlet/>
   </div>
)}

export default App;