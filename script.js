let nombrebienvenida = "";
let suma = "";


function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}


function bienvenida() {
    nombrebienvenida = document.getElementById("e9texto").value;
    let mensaje = "Bienvenido/a a su examen: " + nombrebienvenida + ". Por favor, complete las preguntas. Dispone de 60 minutos.";
    imprimir(mensaje, "funcionesbienvenida");
    let newColor5 = "blue";
    funcionesbienvenida.style.color = newColor5;
}


let lista = ["B. Pruebas de Regresión", "C. Todos aquellos que puedan tener algún uso para la herramienta", "A. Requerimientos", "A. Analista funcional", "A. Diseño de Prueba", "C. Calculos incorrectos", "C. Validan que el sistema esté completo", "B. Prueba de Aceptación de Usuario", "A. Evaluan las funciones que el sistema debe realizar", "A. Se  basan en la estructura interna del sistema"];




function mostrarrespuesta(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("pregunta" + numeroPregunta).value;
    let mensaje = respuestaSeleccionada;
    imprimir(mensaje, "hacontestado" + numeroPregunta);

    let mensaje2 =lista[numeroPregunta - 1];
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



function calcularpuntuacion(){
    let suma = 0;
    let longitud = lista.length;
    let mensaje = "";   
    for (let i=0; i<longitud; i++){
        let respuestapuntos = document.getElementById("pregunta"+(i+1)).value;
         if (respuestapuntos ===lista[i]){
            suma +=2;
        } 
        else if (respuestapuntos ==="No ha cumplimentado la respuesta"){
            suma+=0;
            } 
        
        else {
            suma -= 1;

        }

        }
        
        
        mensaje = "Su puntuación es " + suma;
        imprimir(mensaje, "puntuacion");


        
        borrarRespuesta()
        verRanking ()



    }


    function borrarRespuesta(){
        document.getElementById("ejemploformularioson").reset();
        document.getElementById("Test").reset();
    
        for (let i = 0; i < lista.length; i++) {
        document.getElementById("funcionesbienvenida").innerHTML = "";
        document.getElementById("hacontestado"+(i+1)).innerHTML = "";
        document.getElementById("mostrarrespuesta"+(i+1)).innerHTML = "";
        document.getElementById("correcta"+(i+1)).innerHTML = "";
    }
    }

    
    
    function verRanking () {
        let estudiante = {};
      
        estudiante = {
        nombre: nombrebienvenida,
        puntuacion: suma
    }

    alumnos.push(estudiante);
      
    }


    function ordenar(){
        alumnos.sort((a, b) => b.puntuacion - a.puntuacion);

}

    function imprimirAlumnos(){

        ordenar()

        let mensaje = "";

        for (i=0; i<alumnos.length;i++) {
            let estudiante = alumnos[i];

            mensaje+= "\n Nombre: " + estudiante.nombre;
            mensaje+= "\n Puntuación: " + estudiante.puntuacion;

    }
            

            imprimir(mensaje,"ranking");

        }                      
         
       
   