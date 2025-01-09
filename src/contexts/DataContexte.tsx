import { createContext } from "react";
import { useState } from "react";
type dataType = {
    data: string;
    setData:;
}

/* Création du contexte et nom du contexte*/
const DataContext = createContext<string>("");

/* Type de children. Cela type permet de prendre tout ce que React peux prendre :*/
/* Elément JSX, string, number, null, un tableau d'élément, un fragment ou fragment*/
type childrenType = {
    children: React.ReactNode;
}

/*Mise a disposition du contexte*/
export function DataProvider({children}: childrenType) {
    const [data, setData] = useState<string>("")
    return (
        <DataContext.Provider
             value={{date, setData}}>
             {children}
        </DataContext.Provider>
    )
}