
function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}


function bienvenida() {
    let nombrebienvenida = document.getElementById("e9texto").value;
    let mensaje = "Bienvenido/a a su examen: " + nombrebienvenida + ". Por favor, complete las preguntas. Dispone de 60 minutos.";
    imprimir(mensaje, "funcionesbienvenida");
    let newColor5 = "blue";
    funcionesbienvenida.style.color = newColor5;
}


let lista = ["B. Pruebas de Regresión", "C. Todos aquellos que puedan tener algún uso para la herramienta", "A. Requerimientos", "A. Analista funcional", "A. Diseño de Prueba", "C. Calculos incorrectos", "C. Validan que el sistema esté completo", "B. Prueba de Aceptación de Usuario", "A. Evaluan las funciones que el sistema debe realizar", "A. Se  basan en la estructura interna del sistema"];




function mostrarrespuesta(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("pregunta" + numeroPregunta).value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje, "hacontestado" + numeroPregunta);

    let mensaje2 = "La respuesta correcta es: " + lista[numeroPregunta - 1];
    imprimir(mensaje2, "mostrarrespuesta" + numeroPregunta);

}



function vercorrecta(numeroPregunta) {
    let respuesta = document.getElementById("pregunta" + numeroPregunta).value;
    let mensaje = "";
    let puntuacion;
    if (respuesta === lista[numeroPregunta - 1]) {
        puntuacion = 2;
        mensaje = "Respuesta Correcta. Su puntuación es: " + puntuacion;
    }
    else if (respuesta === "No ha cumplimentado la respuesta") {
        puntuacion = 0;
        mensaje = "No ha cumplimentado su respuesta. Su puntuación es: " + puntuacion;
    }

    else {
        puntuacion = -1;
        mensaje = "Respuesta Incorrecta. Su puntuación es: " + puntuacion;
    }
    imprimir(mensaje, "correcta" + numeroPregunta);
}



