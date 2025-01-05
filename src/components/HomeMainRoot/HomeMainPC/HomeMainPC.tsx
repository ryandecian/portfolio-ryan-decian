import "./HomeMainPC.css"
import Avatar from "../../../assets/data-img/Avatar-Ryan-DECIAN.jpg"
import ProgramLanguageRoot from "../ComponentsHomeMainRoot/ProgramLanguageRoot";
import CardProjetRoot from "../ComponentsHomeMainRoot/CardProjetRoot";
import style from "../ComponentsHomeMainRoot/CardProjetRoot.module.css"
import { Link } from "react-router-dom";

/*Import des images de language dev*/
import LogoReact from "../../../assets/ProgramLanguageImg/LogoReactSimple.png"
import LogoHTML from "../../../assets/ProgramLanguageImg/LogoHTMLSimple.png"
import LogoCSS from "../../../assets/ProgramLanguageImg/LogoCSSSimple.png"
import LogoJavaScript from "../../../assets/ProgramLanguageImg/LogoJavaScriptSimple.png"
import LogoNodeJS from "../../../assets/ProgramLanguageImg/LogoNodeJS.png"
import LogoGitHub from "../../../assets/ProgramLanguageImg/LogoGitHubSimpleBlue.png"
import LogoModuleCSS from "../../../assets/ProgramLanguageImg/LogoModuleCSS.png"

/*Import des images de projet*/
import AnimationCard from "../../../assets/Projets/AnimationCard/AnimationCard.jpg"
import GenkiAnime from "../../../assets/Projets/GenkiAnime/GenkiAnime.jpg"
import ProjetBille from "../../../assets/Projets/Projet-bille/Projet-bille.jpg"

function HomeMainPC() {
    const Projets = [
        {
            id: 1,
            title: "AnimationCard",
            date: {
                yearStart: "10/2024",
                yearEnd: "11/2024",
            },
            img: AnimationCard,
            description1: "Premier projet perso en dehors de la formation où l'objectif était de créer une carte avec des jeux de lumière visible lors du survol de la souris",
            description2: "",
            description3: "",
            lienProd: "https://animation-card-ryan-decian.netlify.app/",
            languageDev: [
                {
                    img: LogoJavaScript,
                    alt: "JavaScript",
                },
                {
                    img: LogoHTML,
                    alt: "HTML",
                },
                {
                    img: LogoCSS,
                    alt: "CSS",
                },
                {
                    img: LogoGitHub,
                    alt: "GitHub",
                },
            ],
        },
        {
            id: 2,
            title: "Projet billes",
            date: {
                yearStart: "16/12/2024",
                yearEnd: "14/01/2025",
            },
            img: ProjetBille,
            description1: "Projet personnel avec pour objectif : créer un fond interactif avec des billes. Débuté en JS, puis poursuivi en React TypeScript pour ajouter plus de fonctionnalités.",
            description2: "",
            description3: "",
            lienProd: "https://animation-card-ryan-decian.netlify.app/",
            languageDev: [
                {
                    img: LogoReact,
                    alt: "React",
                },
                {
                    img: LogoHTML,
                    alt: "HTML",
                },
                {
                    img: LogoCSS,
                    alt: "CSS",
                },
                {
                    img: LogoGitHub,
                    alt: "GitHub",
                },
                {
                    img: LogoJavaScript,
                    alt: "JavaScript",
                },
                {
                    img: LogoNodeJS,
                    alt: "JavaScript",
                },
            ],
        },
        {
            id: 3,
            title: "GenkiAnime",
            date: {
                yearStart: "04/11/2024",
                yearEnd: "29/11/2024",
            },
            img: GenkiAnime,
            description1: "Deuxième projet de formation à la Wild Code School qui devait être fait en groupe mais que j'ai réalisé seul suite au défi de mon formateur. Le projet a été réalisé sous React en TypeScrypt.",        
            description2: "",
            description3: "",
            lienProd: "https://genkianime.netlify.app/",
            languageDev: [
                {
                    img: LogoReact,
                    alt: "React",
                },
                {
                    img: LogoHTML,
                    alt: "HTML",
                },
                {
                    img: LogoCSS,
                    alt: "CSS",
                },
                {
                    img: LogoGitHub,
                    alt: "GitHub",
                },
                {
                    img: LogoJavaScript,
                    alt: "JavaScript",
                },
                {
                    img: LogoNodeJS,
                    alt: "JavaScript",
                },
                {
                    img: LogoModuleCSS,
                    alt: "Module CSS",
                },
            ],
        },
    ]
    return (
        <section className="HomeMainPC">

            <section className="ContainerAboutHomeMainPC">

            <h2>A Propos</h2>

            <section className="SubContainerAboutHomeMainPC">

                <div className="PresentationPC">

                    <div className="AvatarPC">
                        <img src={Avatar} alt="Ryan DECIAN" />
                    </div>

                    <div className="DescriptionPC">
                        <p>
                             Pleinement engagé dans la philosophie 
                             de l’apprentissage tout au long de la vie, 
                             je suis un développeur full stack avec une profonde passion 
                             pour JavaScript, React et tout ce qui concerne le développement 
                             Web. La combinaison unique de créativité, de logique, de 
                             technologie et de ne jamais être à court de nouvelles choses à 
                             découvrir, alimente mon enthousiasme et ma passion pour le 
                             développement Web. Quand je ne suis pas devant mon ordinateur, 
                             j’aime passer mon temps à lire, à me maintenir en forme et à jouer de la guitare.
                        </p>
                    </div>

                </div>


               <ProgramLanguageRoot />
               
            </section>

            </section>

             <section className="ContainerProjetHomeMainPC">
                <h2>Projets</h2>
                 <section className="MapProjetPC">
                     {
                         Projets.map((Var) => {
                             return (
                                 <CardProjetRoot
                                     moduleContainerCardProjetRoot = {style.ContainerCardProjetRootPC}
                                     moduleCardProjetImg = {style.CardProjetImgPC}
                                     moduleContainerCardProjetInfo = {style.ContainerCardProjetInfoPC}
                                     moduleTitleCardProjet = {style.TitleCardProjetPC}
                                     moduleYearCardProjet = {style.YearCardProjetPC}
                                     moduleButtonCardProjet = {style.ButtonCardProjetPC}
                                     src = {Var.img}
                                     title = {Var.title}
                                     yearStart = {Var.date.yearStart}
                                     yearEnd = {Var.date.yearEnd}
                                     key = {Var.id}

                                     moduleContainerSubCardProjetRoot = {style.ContainerSubCardProjetRootPC}
                                     moduleSubContainerSubCardProjetRoot = {style.SubContainerSubCardProjetRootPC}
                                     moduleTitleSubCardProjet = {style.TitleSubCardProjetPC}
                                     moduleDateSubCardProjet = {style.DateSubCardProjetPC}
                                     moduleContainerSubCardProjetInfo = {style.ContainerSubCardProjetInfoPC}
                                     moduleDescriptionSubCardProjet = {style.DescriptionSubCardProjetPC}
                                     description1 = {Var.description1}
                                     description2 = {Var.description2}
                                     description3 = {Var.description3}
                                     moduleImgLangageDev = {style.ImgLangageDevPC}
                                     languageDev = {Var.languageDev || []}
                                     lienProd = {Var.lienProd}
                                     moduleLienProd = {style.LienProdPC}
                                     />
                             )
                         })
                     }
                 </section>
                 <Link to="Projets" className="ButtonHomeMainPC">Voir plus de projets</Link>
             </section>
         </section>
     )
 }

export default HomeMainPC;