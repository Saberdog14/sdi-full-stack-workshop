const express = require("express");
const cors = require("cors");

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

app.get("/data", (req, res) =>
  res.status(200).json({ message: "Data will go here!" }),
);

app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`),
);
