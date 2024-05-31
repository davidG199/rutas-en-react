import Home from "./pages/home";
import Ours from "./pages/ours";
import Recipes from "./pages/recipes";
import Contact from "./pages/contact";
import NoFound from "./pages/nofound";
import { Routes, Route } from "react-router-dom";
import Recipe from "./pages/recipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ours" element={<Ours />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipe/:id" element={<Recipe />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
} 
export default App;
