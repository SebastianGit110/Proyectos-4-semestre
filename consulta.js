const mysql = require("mysql")
const express = require("express")
const app = express()

const conexion = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "RootUmb",
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
            conexion.end();
        }
    });
});

app.use(express.static('public')); // Tienen que correrse despues de la consulta porque si se hace antes, el html va a solicitar el mismo html
// Hace los arcivos estaticos y se pueden acceder http://localhost:1337/index.html

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});