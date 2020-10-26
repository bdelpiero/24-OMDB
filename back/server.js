const express = require("express");
const cors = require("cors");
const app = express();

// usa cors para poder recibir pedidos del server del front
app.use(cors());

app.get("/api/users", (req, res) => {
  console.log("aca");
  res.send(["facu", "lucas", "etc"]);
});

app.listen(8080, () => console.log("Server listening at port 8080"));
