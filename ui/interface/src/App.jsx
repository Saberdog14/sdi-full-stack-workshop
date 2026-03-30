import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Data from "./Components/Data";
import Build from "./Components/Build";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div id="Header">
        <h1>THE GREAT BAKED POTATO REPOSITORY</h1>
        <div id="Links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/build">Build a Spud</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/recipes" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
