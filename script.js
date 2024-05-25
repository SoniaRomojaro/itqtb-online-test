
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




function mostrarrespuesta() {
    let respuestaSeleccionada = document.getElementById("pregunta1").value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje, "hacontestado");
    let newColor = "violet";
    pregunta1.style.color = newColor;
    let newColor3 = "blue";
    hacontestado.style.color = newColor3;

    let parrafo = document.getElementById("mostrarrespuesta1");
    parrafo.innerText = "La respuesta correcta es B: Pruebas de Regresión";
    let newColor2 = "green";
    mostrarrespuesta1.style.color = newColor2;
}


function vercorrecta() {
    let respuesta = document.getElementById("pregunta1").value;
    let mensaje = "";
    if (respuesta === "B. Pruebas de Regresión") {
        mensaje = "Respuesta Correcta";
    }
    else if (respuesta === "No ha cumplimentado la respuesta") {
        mensaje = "No ha cumplimentado su respuesta";
    }

    else {
        mensaje = "Repuesta Incorrecta";
    }
    imprimir(mensaje, "correcta");
}

function verpuntuacion() {
    let puntuacion = document.getElementById("pregunta1").value;
    let mensaje = "";
    let puntos;
    if (puntuacion === "B. Pruebas de Regresión") {
        puntos = 2;
    }
    else if (puntuacion === "No ha cumplimentado la respuesta") {
        puntos = 0;
    }
    else {
        puntos = -1;
    }
    mensaje = "Su puntuación es de: " + puntos;
    imprimir(mensaje, "puntuacion");
}