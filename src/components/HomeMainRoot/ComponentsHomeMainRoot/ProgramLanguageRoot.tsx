import style from "./ProgramLanguageRoot.module.css"

/*Import des images*/
import LogoReact from "../../../assets/ProgramLanguageImg/LogoReact.png"

function ProgramLanguageRoot() {
    return (
         <div className={style.LanguageDevPC}>

             <div className={style.Container1}>
                 <div className={style.BorderContainer}>
                     <img src={LogoReact} alt="Logo React" />
                 </div>
             </div>

             <div className={style.Container2}><p>test2</p></div>
             <div className={style.Container3}><p>test3</p></div>
             <div className={style.Container4}><p>test4</p></div>
             <div className={style.Container5}><p>test5</p></div>
             <div className={style.Container6}><p>test6</p></div>
             <div className={style.Container7}><p>test7</p></div>
         </div>
    )
}

export default ProgramLanguageRoot;