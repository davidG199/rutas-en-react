import React from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let { id } = useParams();

  console.log(useParams());

  return <h1>Datos Receta {id}</h1>;
};

export default Recipe;
