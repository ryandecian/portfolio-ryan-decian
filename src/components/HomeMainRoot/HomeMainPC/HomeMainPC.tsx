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

/*Import des images de projet*/
import AnimationCard from "../../../assets/Projets/AnimationCard/AnimationCard.jpg"

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
                    img: LogoReact,
                    alt: "React",
                },
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
            ],
        },
        {
            id: 2,
            title: "Projet billes",
            date: {
                yearStart: "2024",
                yearEnd: "2024",
            },
            img: LogoReact,
            description1: "Premier projet de groupe de la formation, avec un délai de 2 semaines pour le realiser. Réaliser un site en groupe avec pour thème choisi les bonne adresse pour manger.",
        },
        {
            id: 3,
            title: "Projet card",
            date: {
                yearStart: "2015",
                yearEnd: "10/2024",
            },
            img: LogoReact,
            description: "Premier projet de groupe de la formation, avec un délai de 2 semaines pour le realiser. Réaliser un site en groupe avec pour thème choisi les bonne adresse pour manger.",
        },
        {
            id: 4,
            title: "Projet card",
            date: {
                yearStart: "2015",
                yearEnd: "10/2024",
            },
            img: LogoReact,
            description: "Premier projet de groupe de la formation, avec un délai de 2 semaines pour le realiser. Réaliser un site en groupe avec pour thème choisi les bonne adresse pour manger.",
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