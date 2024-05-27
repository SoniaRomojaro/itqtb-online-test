
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


let lista = ["B. Pruebas de Regresión","C. Todos aquellos que puedan tener algún uso para la herramienta","A. Requerimientos", "A. Analista funcional", "A. Diseño de Prueba","C. Calculos incorrectos", "C. Validan que el sistema esté completo", "B. Prueba de Aceptación de Usuario", "A. Evaluan las funciones que el sistema debe realizar", "A. Se  basan en la estructura interna del sistema"];





function Mostrar() {
    let elemento = document.getElementById("pregunta1").value;
    let posicionElemento = lista.indexOf(elemento);
    let mensaje = ""
    if(posicionElemento === -1){
        mensaje = "Su respuesta no es correcta";

    }else {
        mensaje = "Su respuesta es correcta: ";
    }

    
    imprimir(mensaje,"listaresultado");
}











function mostrarrespuesta() {
    let respuestaSeleccionada = document.getElementById("pregunta1").value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada;
    imprimir(mensaje, "hacontestado");

    let parrafo = document.getElementById("mostrarrespuesta1");
    parrafo.innerText = "La respuesta correcta es B: Pruebas de Regresión";
    let newColor2 = "green";
    mostrarrespuesta1.style.color = newColor2;
}





function vercorrecta() {
    let respuesta = document.getElementById("pregunta1").value;
    let mensaje = "";
    let puntuacion;
    if (respuesta === "B. Pruebas de Regresión") {
        puntuacion = 2;
        mensaje = "Respuesta Correcta. Su puntuación es: " + puntuacion;
    }
    else if (respuesta === "No ha cumplimentado la respuesta") {
        puntuacion = 0;
        mensaje = "No ha cumplimentado su respuesta. Su puntuación es: " + puntuacion;
    }

    else {
        puntuacion = -1;
        mensaje = "Repuesta Incorrecta. Su puntuación es: " + puntuacion;
    }
    imprimir(mensaje, "correcta");
}

function mostrarrespuesta2() {
    let respuestaSeleccionada2 = document.getElementById("pregunta2").value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada2;
    imprimir(mensaje, "hacontestado2");

    let parrafo = document.getElementById("mostrarrespuesta2");
    parrafo.innerText = "La respuesta correcta es C. Todos aquellos que puedan tener algún uso para la herramienta";
    let newColor2 = "green";
    mostrarrespuesta1.style.color = newColor2;
}


function vercorrecta2() {
    let respuesta = document.getElementById("pregunta2").value;
    let mensaje = "";
    let puntuacion;
    if (respuesta === "C. Todos aquellos que puedan tener algún uso para la herramienta") {
        puntuacion = 2;
        mensaje = "Respuesta Correcta. Su puntuación es: " + puntuacion;
    }
    else if (respuesta === "No ha cumplimentado la respuesta") {
        puntuacion = 0;
        mensaje = "No ha cumplimentado su respuesta. Su puntuación es: " + puntuacion;
    }

    else {
        puntuacion = -1;
        mensaje = "Repuesta Incorrecta. Su puntuación es: " + puntuacion;
    }
    imprimir(mensaje, "correcta2");
}


function mostrarrespuesta3() {
    let respuestaSeleccionada3 = document.getElementById("pregunta3").value;
    let mensaje = "Su respuesta: " + respuestaSeleccionada3;
    imprimir(mensaje, "hacontestado3");

    let parrafo = document.getElementById("mostrarrespuesta3");
    parrafo.innerText = "A. Requerimientos";
    let newColor2 = "green";
    mostrarrespuesta1.style.color = newColor2;
}


function vercorrecta3() {
    let respuesta = document.getElementById("pregunta3").value;
    let mensaje = "";
    let puntuacion;
    if (respuesta === "A. Requerimientos") {
        puntuacion = 2;
        mensaje = "Respuesta Correcta. Su puntuación es: " + puntuacion;
    }
    else if (respuesta === "No ha cumplimentado la respuesta") {
        puntuacion = 0;
        mensaje = "No ha cumplimentado su respuesta. Su puntuación es: " + puntuacion;
    }

    else {
        puntuacion = -1;
        mensaje = "Repuesta Incorrecta. Su puntuación es: " + puntuacion;
    }
    imprimir(mensaje, "correcta3");
}