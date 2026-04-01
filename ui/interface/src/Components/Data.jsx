import "./Data.css";
import { useEffect, useState } from "react";

function Data() {
  const [spud, setSpud] = useState();
  useEffect(() => {
    fetch(`http://localhost:8080/data`)
      .then((response) => response.json())
      .then((data) => {
        setSpud(data);
        console.log(data);
      });
  }, []);

  if (!spud) return <h2>Loading Taters...</h2>;

  return (
    <>
      <h1>Choose a Tasty Potato!</h1>
      <div id="Options">
        {spud.map((spuds) => (
          <div id="recipes">
            <h2>
              <i>{spuds.name}</i>
            </h2>
            <h3>Ingredients: {spuds.ingredients}</h3>
            <h3>Instructions: {spuds.instructions}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default Data;
