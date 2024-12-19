import "./HomeMainPC.css"
import Avatar from "../../../assets/data-img/Avatar-Ryan-DECIAN.jpg"

function HomeMainPC() {
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


                <div className="LanguageDevPC">
                    <div className="div1"><p>test1</p></div>
                    <div className="div2"><p>test2</p></div>
                    <div className="div3"><p>test3</p></div>
                    <div className="div4"><p>test4</p></div>
                    <div className="div5"><p>test5</p></div>
                    <div className="div6"><p>test6</p></div>
                    <div className="div7"><p>test7</p></div>
                </div>
            </section>

            </section>

            <section className="ContainerProjetHomeMainPC"></section>
        </section>
    )
}

export default HomeMainPC;