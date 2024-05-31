import Articles from "./articles";
import recetas from "./../../public/datos.json"

let id = 0;

function Content() {
    // console.log(recetas)
    let {Arroces, Postres, Pastas, Sopas, Ensaladas} = recetas

    return(
        <div className="col-sm-8">
            {
                Postres.map((postre) =>(
                    <Articles id={id} key={id++} recipes ={postre}/> 
                )) 
            }
        </div>
    );
}
export default Content;