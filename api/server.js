const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const port = 8080;
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => res.status(200).send("This is the API homepage!"));

app.get("/data", async (req, res) => {
  try {
    const result = await db("baked_potato")
      .join(
        "potato_recipes",
        "baked_potato.id",
        "potato_recipes.baked_potato_id",
      )
      .select("baked_potato.id", "name", "ingredients", "instructions");
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
});

app.post("/data", async (req, res) => {
  try {
    const { name, ingredients, instructions } = req.body;

    const [recipeId] = await db("baked_potato")
      .insert({
        name,
      })
      .returning("id");

    await db("potato_recipes").insert({
      baked_potato_id: recipeId.id || recipeId,
      ingredients,
      instructions,
    });

    res.status(201).json({
      message: "Recipe created successfully",
      id: recipeId.id || recipeId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.put("/data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, ingredients, instructions } = req.body;

    await db("baked_potato").where({ id }).update({
      name,
    });

    await db("potato_recipes").where({ baked_potato_id: id }).update({
      ingredients,
      instructions,
    });

    res.json({
      message: "Recipe updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.delete("/data/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db("potato_recipes").where({ baked_potato_id: id }).del();

    await db("baked_potato").where({ id }).del();

    res.json({
      message: "Recipe deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.listen(port, "0.0.0.0", () =>
  console.log(`The server is running on http://localhost:${port}`),
);
