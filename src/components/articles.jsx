import { Link } from "react-router-dom";

function Articles({ recipes, id }) {
//   console.log(recipes);
    // console.log(id)
  return (
    <>
      <h2>{recipes.titulo}</h2>
      <h5>{recipes.subtitulo}</h5>
      <div className="fakeimg">
        <Link to={`/Recipe/` + id} >
          <img src={recipes.imagenes[0]} />
        </Link>
      </div>
      <p>{recipes.texto}</p>
    </>
  );
}
export default Articles;
