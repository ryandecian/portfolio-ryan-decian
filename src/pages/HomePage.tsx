import "./HomePage.css"
import NavRoot from "../components/NavRoot/NavRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";

function HomePage() {
    return(
        <>
        <header>
            <NavRoot />
        </header>
        <main>
            <HomeMainRoot />
        </main>
        <footer></footer>
        </>
    )
}

export default HomePage;