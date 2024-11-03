import Nav from "./components/Nav"
import { Outlet, Link } from "react-router-dom";
import "light.css"



function App() {

  return (
   <div>
       <Nav/>
       <Outlet/>
   </div>
)}

export default App;