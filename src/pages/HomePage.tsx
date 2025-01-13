import "./HomePage.css"
import NavRoot from "../components/NavRoot/NavRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import FooterRoot from "../components/Footer/FooterRoot";

function HomePage() {
    return(
        <>
        <header>
             <NavRoot />
        </header>
        <main>
             <HomeMainRoot />
        </main>
        <footer>
             <FooterRoot />
        </footer>
        </>
    )
}

export default HomePage;