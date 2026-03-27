
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Data from "./Components/Data";
import Build from "./Components/Build";

function App() {

  return (
    <>
      <div id="Header">
        <h1>THE GREAT BAKED POTATO REPOSITORY</h1>
        <div id="Links">
          <Link to="/recipes">Recipes</Link>
          <Link to="/build">Build a Spud</Link>
        </div>
      </div>
      <Routes>
        
        <Route path="/build" element={<Build />} />
        <Route path="/recipes" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
