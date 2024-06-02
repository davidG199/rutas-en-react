import { createContext, useState } from "react";

//crear contexto global
let infoContext = createContext();

let RecipesProvider = ({children}) => {
  let [infoRecipes, setInfoRecipes] = useState("");

  return (
    <infoContext.Provider 
    value={{
        infoRecipes,
        setInfoRecipes,
        }}>
      {children}
    </infoContext.Provider>
  );
};

export {infoContext, RecipesProvider}
