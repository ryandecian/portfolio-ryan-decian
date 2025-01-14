import style from "./ProgramLanguageRoot.module.css"

/*Import des images*/
import LogoReact from "../../../assets/ProgramLanguageImg/LogoReactSimple.png"
import LogoNodeJS from "../../../assets/ProgramLanguageImg/LogoNodeJS.png"
import LogoHTML from "../../../assets/ProgramLanguageImg/LogoHTMLSimple.png"
import LogoCSS from "../../../assets/ProgramLanguageImg/LogoCSSSimple.png"
import LogoJavaScript from "../../../assets/ProgramLanguageImg/LogoJavaScriptSimple.png"
import LogoGitHub from "../../../assets/ProgramLanguageImg/LogoGitHubSimpleBlue.png"

function ProgramLanguageRoot() {
    return (
         <div className={style.LanguageDevRoot}>

             <div className={style.Container1Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoReact} alt="Logo React" />
                     <h5>REACT</h5>
                 </div>
             </div>

             <div className={style.Container2Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoCSS} alt="Logo CSS" />
                     <h5>CSS</h5>
                 </div>
             </div>

             <div className={style.Container3Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoCSS} alt="Logo Module CSS" />
                     <h5>Module CSS</h5>
                 </div>
             </div>

             <div className={style.Container4Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoHTML} alt="Logo HTML" />
                     <h5>HTML</h5>
                 </div>
             </div>

             <div className={style.Container5Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoJavaScript} alt="Logo JavaScript" />
                     <h5>JAVASCRIPT</h5>
                 </div>
             </div>

             <div className={style.Container6Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoNodeJS} alt="Logo NodeJS" />
                     <h5>NodeJS</h5>
                 </div>
             </div>

             <div className={style.Container7Root}>
                 <div className={style.BorderContainerRoot}>
                     <img src={LogoGitHub} alt="Logo GitHub" />
                     <h5>Git et GitHub</h5>
                 </div>
             </div>

         </div>
    )
}

export default ProgramLanguageRoot;