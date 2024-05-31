import { createContext, useState } from "react";
import { Nav } from "./components/hooks/nav";
export let Context = createContext();

function App() {
  let [login, setLogin] = useState(false);
  return (
    <>
      <Context.Provider value={[login, setLogin]}>
        <Nav />
        <h1> { login ? 'Logout ⛔':'Login 😁' } </h1>
      </Context.Provider> 
    </>
  );
}

export default App;
