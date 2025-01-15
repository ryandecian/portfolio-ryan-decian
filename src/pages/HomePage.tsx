import "./HomePage.css"
import NavRoot from "../components/NavRoot/NavRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import FooterRoot from "../components/Footer/FooterRoot";
import { Helmet } from "react-helmet";

function HomePage() {
    return(
        <Helmet>
        <header>
             <NavRoot />
        </header>
        <main>
             <HomeMainRoot />
        </main>
        <footer>
             <FooterRoot />
        </footer>
        </Helmet>
    )
}

export default HomePage;