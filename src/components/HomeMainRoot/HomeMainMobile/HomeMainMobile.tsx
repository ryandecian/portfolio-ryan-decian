import "./HomeMainMobile.css"
import { Link } from "react-router-dom";
import CardProjetRoot from "../ComponentsHomeMainRoot/CardProjetRoot";
import style from "../ComponentsHomeMainRoot/CardProjetRoot.module.css"
import ProgramLanguageRoot from "../ComponentsHomeMainRoot/ProgramLanguageRoot";
import Avatar from "../../../assets/data-img/RyanDECIAN.jpg"
import { useData } from "../../../contexts/DataContexte";

function HomeMainMobile() {

    const {data} = useData()
    
    return (
         <section className="HomeMainMobile">

             <section className="ContainerAboutHomeMainMobile">

                 <h2>A Propos</h2>

                 <section className="SubContainerAboutHomeMainMobile">

                     <div className="PresentationMobile">

                         <div className="AvatarMobile">
                             <img src={Avatar} alt="Ryan DECIAN" />
                         </div>

                         <div className="DescriptionMobile">
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

             <section className="ContainerProjetHomeMainMobile">
                 <h2>Projets</h2>
                 <section className="MapProjetMobile">
                     {
                         data.map((Var) => {
                              return (
                                 <CardProjetRoot
                                     moduleContainerCardProjetRoot = {style.ContainerCardProjetRootMobile}
                                     moduleCardProjetImg = {style.CardProjetImgMobile}
                                     moduleContainerCardProjetInfo = {style.ContainerCardProjetInfoMobile}
                                     moduleTitleCardProjet = {style.TitleCardProjetMobile}
                                     moduleYearCardProjet = {style.YearCardProjetMobile}
                                     moduleButtonCardProjet = {style.ButtonCardProjetMobile}
                                     src = {Var.img}
                                     title = {Var.title}
                                     yearStart = {Var.date.yearStart}
                                     yearEnd = {Var.date.yearEnd}
                                     key = {Var.id}

                                     moduleContainerSubCardProjetRoot = {style.ContainerSubCardProjetRootMobile}
                                     moduleSubContainerSubCardProjetRoot = {style.SubContainerSubCardProjetRootMobile}
                                     moduleLienProdTitle = {style.LienProdTitleMobile}
                                     moduleTitleSubCardProjet = {style.TitleSubCardProjetMobile}
                                     moduleDateSubCardProjet = {style.DateSubCardProjetMobile}
                                     moduleContainerSubCardProjetInfo = {style.ContainerSubCardProjetInfoMobile}
                                     moduleDescriptionSubCardProjet = {style.DescriptionSubCardProjetMobile}
                                     description1 = {Var.description1}
                                     description2 = {Var.description2}
                                     description3 = {Var.description3}
                                     moduleImgLangageDev = {style.ImgLangageDevMobile}
                                     languageDev = {Var.languageDev || []}
                                     lienProd = {Var.lienProd}
                                     moduleLienProd = {style.LienProdMobile}
                                 />
                             )
                         })
                     }
                 </section>
                 <Link to="Projets" className="ButtonHomeMainMobile">Voir plus de projets</Link>
             </section>

         </section>
    )
}

export default HomeMainMobile;