// import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Data from "./Components/data";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>THE GREAT BAKED POTATO REPOSITORY</h1>
      <Link to="/recipes">Recipes</Link>
      <Routes>
        <Route path="/recipes" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
