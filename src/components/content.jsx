import Articles from "./articles";
import recetas from "./../../public/datos.json"
import { infoContext } from "./recipeProvider";
import { useContext, useEffect, useState } from "react";

let {Arroces, Postres, Pastas, Sopas, Ensaladas} = recetas
let recipesData = [...Arroces, ...Postres, ...Pastas, ...Sopas, ...Ensaladas]
let recipesRandom = recipesData.sort(() => Math.random() - 0.5)

function Content() {

    let {setInfoRecipes} = useContext(infoContext)

    useEffect(() => {
        setInfoRecipes(recipesData)
    }, [])

    let [dataVisible, setDataVisible] = useState(5)

    let loadRecipes = () =>{
        setDataVisible( (prev) => prev + 5)
    }

    return(
        <div className="col-sm-8">
            {
                recipesRandom.slice(0, dataVisible).map((receta, index) =>(
                    <Articles id={index} key={index} recipes ={receta}/> 
                )) 
            }
            {
                dataVisible < recipesData.length && <button onClick={loadRecipes} className="btn btn-primary">Cargar mas</button>
            }
        </div>
    ); 
}
export default Content;