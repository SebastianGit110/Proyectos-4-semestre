var empleadosContainer = document.getElementById("empleado-info");
var boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    var peticion = new XMLHttpRequest();
    peticion.open("GET","empleados.json");

    peticion.onload = function(){
        var nDatos = JSON.parse(peticion.responseText);
        renderHTML(nDatos);
        console.log(nDatos)
    };
    peticion.send();
});

function renderHTML(nDatos){
    var htmlString = "";

    for(i = 0; i<nDatos.array.length; i++){ // nDatos.array.length conoce el tamaño del array en el json
        htmlString += "<p>" + nDatos.array[i].nombre + " " + nDatos.array[i].apellido + "</p>";
    }
    empleadosContainer.innerHTML = htmlString;
};