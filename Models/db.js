const mysql = require("mysql");
const dbConfig = require("./config.js");

// Crear la conección a la base de datos
const connection = mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});

// abre la conexión a MySQL
connection.connect(error => {
    if (error) throw error;
    console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;