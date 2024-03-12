const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Analizar solicitudes de tipo: application/json 
app.use(bodyParser.json());
// Analizar solicitudes de tipo: application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// enrutamiento simple
app.get("/", (req, res) => { 
    res.json({ message: "Welcome to bezkoder application." }); 
});
// configurar el puerto, para escuchar peticiones de servicio 
app.listen(3000, () => {
console.log("Server ejecutándose en el puerto 3000.");
});