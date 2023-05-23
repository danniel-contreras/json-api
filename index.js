const express = require("express");
const cors = require("cors");
const app = express();
const port = 4300;

app.use(cors({ origin: ["http://192.168.101.4:5173"] }));

app.use(express.json());

app.use(express.urlencoded());

app.get("/api/data", (req, res) => {
  const name = req.query.name || "";
  // Lee el archivo JSON y envíalo como respuesta
  const jsonData = require("./products.json");
  let filteredData = jsonData;
  if (name) {
    filteredData = jsonData.filter((product) => product.name.includes(name));
  }

  // Envía la respuesta con los datos filtrados
  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
