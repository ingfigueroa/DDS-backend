const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.get("/", (req, res)=> {
  res.send("Backend Inicial programado por: Ing. Rodolfo Figueroa");
});

const port = 3000;
app.listen(port, () => {
  console.log('Sitio escuchando el puerto ${port}');
});



