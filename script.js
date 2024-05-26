
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


let listaPreguntas = ["1.¿Qué tipo de pruebas se hacen tras un despliegue?", "2. Pregunta2", "3. Pregunta3", "4. Pregunta4", "5. Pregunta5", "6. Pregunta6", "7. Pregunta7", "8. Pregunta8", "9. Pregunta9", "10. Pregunta10"];

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
        mensaje = "Por favor, conteste a la pregunta: " + elemento + posicionpregunta;
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

