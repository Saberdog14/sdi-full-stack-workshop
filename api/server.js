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
      .select("name", "ingredients", "instructions");
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
});

// app.put("/data", (req, res));

app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`),
);
