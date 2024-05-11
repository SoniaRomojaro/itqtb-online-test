
function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}


function bienvenida(){
    let nombrebienvenida = document.getElementById("e9texto").value;
    let mensaje = "Bienvenido/a a su examen: " + nombrebienvenida + ". Por favor, complete las preguntas. Dispone de 60 minutos.";
    imprimir(mensaje,"funcionesbienvenida");
}

 
    

function mostrarrespuesta () {
    let respuestaSeleccionada = document.getElementById("pregunta1").value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje,"hacontestado");

    let parrafo = document.getElementById("mostrarrespuesta");
    parrafo.innerText = "La respuesta correcta es B: Pruebas de Regresión";
}