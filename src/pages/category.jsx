import { useParams } from "react-router-dom";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";
import recetas from "./../../public/datos.json";

function Category() {
  let { categoria } = useParams();

  let infoRecetas = recetas[categoria];
  // console.log(infoRecetas);

  return (
    <>
      <Header />
      <Menu />
      <div className="row">
        <Aside />
        <div className="col-sm-8 mt-3">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              infoRecetas.map((item, index)=>(
            <div className="col" key={index}>
              <div className="card">
                <img src={item.imagenes[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">
                    {item.texto}
                  </p>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
