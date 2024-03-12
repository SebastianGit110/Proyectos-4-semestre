const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rootumb",
  database: "gestion",
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("conexion exitosa");
});

// Permite conseguir info de la BD
app.get("/api/personas", function (req, resp) {
  conexion.query("SELECT * FROM users", function (error, rows) {
    if (!!error) {
      console.log("Conexion fallida");
    } else {
      console.log("Consulta de la info de la tabla");
      console.log(rows);
      resp.json(rows);
      // conexion.end() // Cierra la conexion y no me permite traer mas datos, pero si la comento la conexion
      // Queda abierta y se pueden seguir haciendo consultas
    }
  });
});

app.get("/api/personas/:id", (req, res) => {
  conexion.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (error, rows) => {
      if (error) {
        throw error;
      } else {
        res.send(rows);
      }
    }
  );
});

app.listen(1338);
