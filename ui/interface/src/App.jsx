// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Data from "./Components/data";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/data" element={<Data />} />
      </Routes>
      <h1> Trying to get API data</h1>
    </BrowserRouter>
  );
}

export default App;
