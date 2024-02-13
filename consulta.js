const mysql = require("mysql")
const express = require("express")
const app = express()

const conexion = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Rootumb",
    database : "gestion"
});

conexion.connect((error)=>{
    if (error) throw error 
    console.log('conexion exitosa')
});

app.get('/', function(req, resp){
    conexion.query('SELECT * FROM users', function(error, rows){
        if(!!error){
            console.log('Conexion fallida')
        }
        else{
            console.log('Consulta de la info de la tabla')
            console.log(rows)
            resp.json(rows)
            conexion.end()
        }
    });
});

app.listen(1337)