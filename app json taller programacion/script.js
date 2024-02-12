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

    for(i = 0; i<nDatos.length; i++){
        htmlString += "<p>" + nDatos[i].nombre + " " + nDatos[i].apellido + "</p>";
    }
    empleadosContainer.innerHTML = htmlString;
};