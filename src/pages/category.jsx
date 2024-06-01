import { useParams } from "react-router-dom";
import Aside from "../components/aside";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";

function Category() {

  let {id} = useParams()

  console.log(id);
  return (
    <>
      <Header />
      <Menu />
      <div className="row">
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default Category;
