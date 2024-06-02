import { Link } from "react-router-dom";

function Aside() {


    return(
    <div className="col-sm-4 sticky-top">
      <h2>Sobre mi</h2>
      <p>David Gomez</p>
      <h3 className="mt-4">Categorias</h3>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item ">
          <Link className="nav-link " to="/Category/Arroces">Arroces</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Pastas">Pastas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Ensaladas">Ensaladas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Sopas">Sopas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category/Postres">Postres</Link>
        </li>
      </ul>
      <hr className="d-sm-none" />
    </div>
    );
}

export default Aside;