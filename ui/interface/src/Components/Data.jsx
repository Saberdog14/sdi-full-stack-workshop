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
  });
  return (
    <>
      <h2>here</h2>
      <h1>{spud}</h1>
    </>
  );
}
export default Data;
