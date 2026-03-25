const express = require("express");

const port = 8080;
const app = express();

app.get("/", (req, res) => res.status(200).send("This is the API homepage!"));

app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`),
);
