import { useState } from "react";

function Build() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          ingredients,
          instructions,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save recipe.");
      }

      alert("Thank You! Your potato has been saved!");

      setName("");
      setIngredients("");
      setInstructions("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <h2>Submit your recipes!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tater Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <input
          type="text"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Build;
