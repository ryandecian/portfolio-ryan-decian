import "./HomeMainPC.css"
import Avatar from "../../../assets/data-img/RyanDECIAN.jpg"
import ProgramLanguageRoot from "../ComponentsHomeMainRoot/ProgramLanguageRoot";
import CardProjetRoot from "../ComponentsHomeMainRoot/CardProjetRoot";
import style from "../ComponentsHomeMainRoot/CardProjetRoot.module.css"
import { Link } from "react-router-dom";
import { useData } from "../../../contexts/DataContexte";


function HomeMainPC() {
    const {data} = useData()

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
                             j’aime passer mon temps à lire, à me maintenir en forme et à faire de l'équitation.
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
                         data.map((Var) => {
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
                                     moduleLienProdTitle = {style.LienProdTitlePC}
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