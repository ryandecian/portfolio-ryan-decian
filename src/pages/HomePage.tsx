import "./HomePage.css"
import NavRoot from "../components/NavRoot/NavRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import FooterRoot from "../components/Footer/FooterRoot";
import { Helmet } from "react-helmet-async";


function HomePage() {
      const SEO = {
           title: "Portfolio - Ryan DECIAN - Développeur Web Full Stack",
           autor: "Ryan DECIAN",
           description: "",
           url: "", /*URL de la page*/
           img: "",
           twitterUrlImg: "", /*Lien URL de l'image*/
           twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
           keywords: {
                1: "Ryan DECIAN", /* 1 mot clés */
                2: "Portfolio Ryan DECIAN", /* 2 mots clés */
                3: "Développeur Web Full Stack", /* 3 mots clés */
                4: "Développeur Web Juvignac", /* 4 mots clés */
                5: "Développeur Web Grabels", /* 5 mots clés */
                6: "Développeur Web Montpellier", /* 6 mots clés */
                7: "Développeur Web Hérault", /* 7 mots clés */
                8: "Création de site web", /* 8 mots clés */
                9: "Créateur de site Web", /* 9 mots clés */
                10: "Créateur de site Web sur Montpellier", /* 10 mots clés */
                11: "Créateur de site Web sur Juvignac", /* 11 mots clés */
                12: "Créateur de site Web sur Grabels", /* 12 mots clés */
                13: "Créateur de site Web dans l'Hérault", /* 13 mots clés */
                14: "Dev Web", /* 14 mots clés */
                15: "", /* 15 mots clés */
           }, /* 10 a 15 mots max */
           type : {
                website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
                article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
                video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
                music: "music.song", /*Pour les pages dédiées à la musique.*/
                profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
           }
      }
      // Filtrer les mots-clés non vides
      const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return(
           <>
                <Helmet>
                     {/* Balises SEO */}
                          {/* Balise pour indexation général */}
                               <title>{SEO.title}</title>
                               <meta name="description" content={SEO.description}/>
                               <meta name="author" content={SEO.autor} />
                               {filterKeywords && <meta name="keywords" content={filterKeywords} />}

                     {/* Balises OpenGraph - Facebook, Linkedin, WhatsApp, Instagram*/}
                          <meta property="og:title" content={SEO.title} />
                          <meta property="og:description" content={SEO.description} />
                          <meta property="og:image" content="" />
                          <meta property="og:url" content={SEO.url} />
                          <meta property="og:type" content="website" />
                          <meta property="og:locale" content="fr_FR" />

                     {/* Balises Twitter Cards */}
                          <meta name="twitter:title" content={SEO.title} />
                          <meta name="twitter:description" content={SEO.description} />
                          <meta name="twitter:card" content="summary_large_image" />
                          <meta name="twitter:image" content={SEO.twitterUrlImg} />
                          <meta name="twitter:site" content={SEO.twitterCompte} />

                     {/* Balises SEO pour Google */}
                          <meta name="robots" content="index, follow" />
                          <meta name="googlebot" content="index, follow" />
                          <meta name="bingbot" content="index, follow" />

                     {/* Canonical URL (évite le contenu dupliqué pour les moteurs de recherche) */}
                          <link rel="canonical" href={SEO.url} />
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