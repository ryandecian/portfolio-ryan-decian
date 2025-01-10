import { createContext, useContext } from "react";
import { useState } from "react";

/*Import des images de langage dev*/
import LogoReact from "../assets/ProgramLanguageImg/LogoReactSimple.png"
import LogoHTML from "../assets/ProgramLanguageImg/LogoHTMLSimple.png"
import LogoCSS from "../assets/ProgramLanguageImg/LogoCSSSimple.png"
import LogoJavaScript from "../assets/ProgramLanguageImg/LogoJavaScriptSimple.png"
import LogoNodeJS from "../assets/ProgramLanguageImg/LogoNodeJS.png"
import LogoGitHub from "../assets/ProgramLanguageImg/LogoGitHubSimpleBlue.png"
import LogoModuleCSS from "../assets/ProgramLanguageImg/LogoModuleCSS.png"

/*Import des images de projets*/
import AnimationCard from "../assets/Projets/AnimationCard/AnimationCard.jpg"
import GenkiAnime from "../assets/Projets/GenkiAnime/GenkiAnime.jpg"
import ProjetBille from "../assets/Projets/Projet-bille/Projet-bille.jpg"


/*------------------------------------------------------------------------------------------*/
/*Déclaration des types*/

interface ProjectsType {
    id: number;
    title: string;
    date : {
        yearStart: string;
        yearEnd: string;
    };
    img: string;
    description1: string;
    description2: string;
    description3: string;
    lienProd: string;
    languageDev: {
        img: string;
        alt: string;
    }[]
}

interface ProjectsType {
    id: number;
    title: string;
}
interface dataType {
    data: ProjectsType[];
    setData: React.Dispatch<React.SetStateAction<ProjectsType[]>>;
}

/* Type de children. Cela type permet de prendre tout ce que React peux prendre :*/
/* Elément JSX, string, number, null, un tableau d'élément, un fragment ou fragment*/
interface childrenType {
    children: React.ReactNode;
}


/*------------------------------------------------------------------------------------------*/
/* Création du context et nom du context*/

const DataContext = createContext<dataType | null>(null);


/*------------------------------------------------------------------------------------------*/
/*Déclaration des valeurs mise a disposition dans le context*/

const Projects: ProjectsType[] = [
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
        lienProd: "https://projet-bille.netlify.app/",
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


/*------------------------------------------------------------------------------------------*/

/*Mise a disposition du contexte*/
export function DataProvider({children}: childrenType) {
    const [data, setData] = useState<string[]>([""])
    return (
        <DataContext.Provider
             value={{data, setData}}>
             {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    const data = useData(DataContext);
    if (!data) {
      throw new Error("useData doit être utilisé à l'intérieur d'un DataProvider.");
    }
    return data;
  };