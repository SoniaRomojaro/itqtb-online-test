
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


let listaPreguntas = ["1.¿Qué tipo de pruebas se hacen tras un despliegue?","2. ¿Cuando se compra una nueva herramienta de prueba ¿quién debería usarla al principio?", "3. Para los casos de prueba de aceptación se deben considerar:", "4. ¿Quién define el documento de Análisis Funcional?", "5. Menciona una tarea de Prueba", "6. Entre los defectos de las pruebas se incluyen:", "7. Las pruebas de Aceptación", "8. UAT significa:", "9. Prueba Funcional:", "10. Pruebas de caja blanca:"];

function mostrarLista() {
    mensaje = "Las preguntas a contestar son: " + listaPreguntas;
    imprimir(mensaje,"mostrartodas");
}




function seleccionarPreguntacontestar() {
    let elemento = document.getElementById("preguntaseleccionada").value;
    let posicionpregunta = listaPreguntas.indexOf(elemento);
    let mensaje = ""
    if(posicionpregunta === -1){
        mensaje = "El elemento no se encuentra en la lista";
       

    }else {
        mensaje = "Por favor, conteste a la pregunta: " + elemento;
    }
   
    
    imprimir(mensaje,"pregunta");
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