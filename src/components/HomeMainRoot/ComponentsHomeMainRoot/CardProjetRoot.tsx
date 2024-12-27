interface CardProjetRootProps {
    moduleContainerCardProjetRoot: string,
    moduleCardProjetImg: string,
    moduleContainerCardProjetInfo: string,
    moduleTitleCardProjet: string, 
    moduleYearCardProjet: string,
    moduleButtonCardProjet: string, 
    src: string,
    title: string,
    year: number,
    key: number, 
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
         year, 
         key, } = Props
    return (
         <section className={moduleContainerCardProjetRoot}>
             <div className={moduleCardProjetImg}>
                 <img src={src} alt={title} />
             </div>

             <div className={moduleContainerCardProjetInfo} key={key}>
                 <h1 className={moduleTitleCardProjet}>{title}</h1>
                 <h3 className={moduleYearCardProjet}>{year}</h3>
             </div>

             <div className={moduleButtonCardProjet}>
                <button></button>
             </div>
         </section>
    );
}

export default CardProjetRoot;