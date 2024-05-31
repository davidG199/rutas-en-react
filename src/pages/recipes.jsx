import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Aside from "../components/aside";
import Footer from "../components/footer";

const Recipes = () => {
  return (
    <>
    <Header />
    <Menu />
    <div className="row">
      <Aside />
      <div className="col-sm-8">
          <h1>RECETAS</h1>
      </div>  
    </div>
    <Footer />
  </>
  );
};

export default Recipes;
