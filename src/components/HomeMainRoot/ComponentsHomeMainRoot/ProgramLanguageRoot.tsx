import style from "./ProgramLanguageRoot.module.css"

/*Import des images*/
import LogoReact from "../../../assets/ProgramLanguageImg/LogoReact.png"
import LogoNodeJS from "../../../assets/ProgramLanguageImg/LogoNodeJS.png"
import LogoHTML from "../../../assets/ProgramLanguageImg/LogoHTMLWhite.png"
import LogoCSS from "../../../assets/ProgramLanguageImg/LogoCSSWhite.png"
import LogoJavaScript from "../../../assets/ProgramLanguageImg/LogoJavaScriptWhite.png"
import LogoModuleCSS from "../../../assets/ProgramLanguageImg/LogoModuleCSS.png"

function ProgramLanguageRoot() {
    return (
         <div className={style.LanguageDevPC}>

             <div className={style.Container1PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoReact} alt="Logo React" />
                 </div>
             </div>

             <div className={style.Container2PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoCSS} alt="Logo CSS" />
                     <h3></h3>
                 </div>
             </div>

             <div className={style.Container3PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoModuleCSS} alt="Logo Module CSS" />
                 </div>
             </div>

             <div className={style.Container4PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoHTML} alt="Logo HTML" />
                 </div>
             </div>

             <div className={style.Container5PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoJavaScript} alt="Logo JavaScript" />
                 </div>
             </div>

             <div className={style.Container6PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoNodeJS} alt="Logo NodeJS" />
                 </div>
             </div>

             <div className={style.Container7PC}>
                 <div className={style.BorderContainerPC}>
                     <img src={LogoNodeJS} alt="Logo React" />
                 </div>
             </div>

         </div>
    )
}

export default ProgramLanguageRoot;