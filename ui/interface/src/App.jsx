import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Data from "./Components/data";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1> Trying to get API data</h1>
      {/* <Router>
        <Routes>
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
