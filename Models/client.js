const sql = require("/db.js");

// constructor
const Cliente = () => {
    this.email = cliente.email;
    this.nombre = cliente.nombre;
    this.activo = cliente.activo;
};

Cliente.create = (newCliente, result) => {
    sql.query("INSERT INTO clientes SET ?", newCliente, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("crear cliente: ", { id: res.insertId,...newCliente });
        result(null, { id: res.insertId,...newCliente});
    });
};

Cliente.findById = (clienteId, result) => {
    sql.query("SELECT FROM clientes WHERE id = ${clienteId}", (err, res) => {
    if (err) {
    console.log("error: ", err); result(err, null);
    return;
    }
    if (res.length) { console.log("hallar cliente: ", res[0]);
    result(null, res[0]);
    return;
    }
    // Cliente no hallado con esa id result({ kind: "no_encontrado" }, null);
    });
    };