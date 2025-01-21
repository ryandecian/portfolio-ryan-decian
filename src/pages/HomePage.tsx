import "./HomePage.css"
import NavRoot from "../components/NavRoot/NavRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import FooterRoot from "../components/Footer/FooterRoot";
import { Helmet } from "react-helmet-async";


function HomePage() {
     const SEO = {
           title: "Accueil - Portfolio Ryan DECIAN",
           description: "Développeur web full stack junior",
           url: "https://portfolio-ryan-decian.netlify.app",
     }

    return(
           <>
                <Helmet>
                     {/* Balises SEO */}
                          {/* Balise pour Google */}
                               <title>{SEO.title}</title>
                               <meta name="description" content={SEO.description}/>

                          {/* Balises OpenGraph - Facebook, Linkedin, WhatsApp, Instagram*/}
                               <meta property="og:title" content={SEO.title} />
                               <meta property="og:description" content={SEO.description} />
                               <meta property="og:image" content="" /> {/* Non fournis pour le moment */}
                               <meta property="og:url" content={SEO.url} />

                          {/* Balises Twitter Cards */}
                               <meta name="twitter:title" content={SEO.title} />
                               <meta name="twitter:description" content={SEO.description} />
                </Helmet>

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