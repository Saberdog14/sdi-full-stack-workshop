import "./Data.css";
import { useEffect, useState } from "react";

function Data() {
  const [spud, setSpud] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editRecipe, setEditRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  const loadRecipes = async () => {
    const response = await fetch("http://localhost:8080/data");
    const data = await response.json();
    setSpud(data);
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    const response = await fetch(`http://localhost:8080/data/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Delete failed");
      return;
    }

    await loadRecipes();
  };

  const startEditing = (recipe) => {
    setEditingId(recipe.id);

    setEditRecipe({
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    });
  };

  const updateRecipe = async (id) => {
    const response = await fetch(`http://localhost:8080/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editRecipe),
    });

    if (!response.ok) {
      console.error("Update failed");
      return;
    }

    await loadRecipes();
    setEditingId(null);
  };

  if (spud.length === 0) return <h2>Loading Taters...</h2>;

  return (
    <>
      <h1>Choose a Tasty Potato!</h1>

      <div id="Options">
        {spud.map((recipe) => (
          <div id="recipes" key={recipe.id}>
            {editingId === recipe.id ? (
              <>
                <input
                  value={editRecipe.name}
                  onChange={(e) =>
                    setEditRecipe({
                      ...editRecipe,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  value={editRecipe.ingredients}
                  onChange={(e) =>
                    setEditRecipe({
                      ...editRecipe,
                      ingredients: e.target.value,
                    })
                  }
                />

                <textarea
                  value={editRecipe.instructions}
                  onChange={(e) =>
                    setEditRecipe({
                      ...editRecipe,
                      instructions: e.target.value,
                    })
                  }
                />

                <button onClick={() => updateRecipe(recipe.id)}>Save</button>

                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h2>
                  <i>{recipe.name}</i>
                </h2>

                <h3>Ingredients: {recipe.ingredients}</h3>

                <h3>Instructions: {recipe.instructions}</h3>

                <button onClick={() => startEditing(recipe)}>Edit</button>

                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Data;
