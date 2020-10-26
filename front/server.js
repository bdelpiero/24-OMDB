// server del front, solo para renderizar archivos estáticos

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => console.log("Server listening at port 3000"));
