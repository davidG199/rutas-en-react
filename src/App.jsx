import Home from "./pages/home";
import Ours from "./pages/ours";
import Recipes from "./pages/recipes";
import Contact from "./pages/contact";
import NoFound from "./pages/nofound";
import { Routes, Route } from "react-router-dom";
import Recipe from "./pages/recipe";
import { RecipesProvider } from "./components/recipeProvider";

function App() {
  return (
    <RecipesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ours" element={<Ours />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipe/:id" element={<Recipe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </RecipesProvider>
  );
}
export default App;
