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
      <div>{JSON.stringify(spud)}</div>
    </>
  );
}
export default Data;
