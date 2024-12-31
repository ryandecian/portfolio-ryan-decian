import { useState } from "react"

interface CardProjetRootProps {
    moduleContainerCardProjetRoot: string,
    moduleCardProjetImg: string,
    moduleContainerCardProjetInfo: string,
    moduleTitleCardProjet: string, 
    moduleYearCardProjet: string,
    moduleButtonCardProjet: string, 
    src: string,
    title: string,
    yearStart?: string,
    yearEnd?: string,
    key: number, 
    description1?: string,
    description2?: string,
    description3?: string,

    moduleContainerSubCardProjetRoot: string,
    moduleSubContainerSubCardProjetRoot: string,
    moduleTitleSubCardProjet: string,
    moduleDateSubCardProjet: string,
    moduleContainerSubCardProjetInfo: string,
    moduleDescriptionSubCardProjet: string,
}

function CardProjetRoot(Props: CardProjetRootProps) {
    const {
         moduleContainerCardProjetRoot, 
         moduleCardProjetImg, 
         moduleContainerCardProjetInfo, 
         moduleTitleCardProjet, 
         moduleYearCardProjet, 
         moduleButtonCardProjet, 
         src, 
         title, 
         yearStart, 
         yearEnd, 
         key, 
         description1, 
         description2, 
         description3, 

         moduleContainerSubCardProjetRoot, 
         moduleSubContainerSubCardProjetRoot, 
         moduleTitleSubCardProjet, 
         moduleDateSubCardProjet, 
         moduleContainerSubCardProjetInfo, 
         moduleDescriptionSubCardProjet, 
        } = Props

        const [isOpen, setIsOpen] = useState(false);

        const Window = () => {
            setIsOpen((prev) => !prev);
        }

    return (
        <>
        {isOpen === false ?
             <section className={moduleContainerCardProjetRoot}>
                 <div className={moduleCardProjetImg}>
                     <img src={src} alt={title} />
                 </div>

                 <div className={moduleContainerCardProjetInfo} key={key}>
                     <h1 className={moduleTitleCardProjet}>{title}</h1>
                     <h3 className={moduleYearCardProjet}>{yearEnd}</h3>
                 </div>

                 <div className={moduleButtonCardProjet}>
                    <button onClick={Window}>Voir plus</button>
                 </div>
             </section>
         :
             <section className={moduleContainerSubCardProjetRoot}>
                 <div className={moduleSubContainerSubCardProjetRoot}>
                    
                     <h2 className={moduleTitleSubCardProjet}>{title}</h2>

                     <div className={moduleContainerSubCardProjetInfo}>
                     {yearStart || yearEnd ? (
                         <p className={moduleDateSubCardProjet}>
                             {yearStart && yearEnd
                             ? `${yearStart} - ${yearEnd}`
                             : yearStart
                             ? yearStart
                             : yearEnd}
                         </p>
                     ) : null}
                     
                     {description1 
                         ? <p className={moduleDescriptionSubCardProjet}>{description1}</p> 
                         : null}

                     {description2 
                         ? <p className={moduleDescriptionSubCardProjet}>{description2}</p> 
                         : null}

                     {description3 
                         ? <p className={moduleDescriptionSubCardProjet}>{description3}</p> 
                         : null}
                     </div>

                     <div className={yearEnd}><p>JS</p></div>

                 </div>
                <button onClick={Window}>Voir moins</button>
             </section>
         }
         </>
    );
}

export default CardProjetRoot;
