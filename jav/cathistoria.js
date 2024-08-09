const preguntas = [
    {
        pregunta:"¿Qué país es conocido por su tradición de celebrar el Día de los Muertos, una festividad que honra a los difuntos con altares y ofrendas?",
        respuestas:["India","México","Egipto","Brasil"],
        correcta:1
    },
    {
        preguntas:"¿Cuál de los siguientes países es conocido por su tradición de las artes marciales como el karate, judo y sumo?",
        respuestas:["China","Corea del Sur","Japón","Tailandia"],
        correcta:2
    },
    {
        preguntas:"¿Qué país es famoso por su festival de Oktoberfest, una celebración anual de la cerveza que atrae a visitantes de todo el mundo?",
        respuestas:["Suiza","Alemania","Austria","Bélgica"],
        correcta:1
    },
    {
        preguntas:"¿Qué país es famoso por su folklore y mitología que incluye historias de leprechauns,duendes y hadas?",
        respuestas:["Irlanda","Gracia","Escocia","Islandia"],
        correcta:2
    },
    {
        preguntas:"¿Cuál es el país de origen de la ópera,un género de música teatral que combina música vocal e instrumental con actuación dramática?",
        respuestas:["Italia","Francia","Alemania","Rusia"],
        correcta:0
    }
];

let indice_aleatorio = 0;

let pregunta_txt = "";

let interval;

window.onload = inicio();

function inicio() {
    pregun();
    if (localStorage.getItem ("Score") != null) {
        localStorage.removeItem("Score");
    }
}
function tiempo() {
    document.getElementById('countdown').innerHTML = totalTime;
    if(totalTime==0){
      console.log('Final');
    }else{
      totalTime-=1;
      setTimeout("updateClock()",1000);
    }
  }
function pregun() {
    tiempo()
    if (preguntas.length) {
        indice_aleatorio = Math.floor (Math.random () * preguntas.length);
        
        pregunta_txt = "";
        pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';
        pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';
        pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';
        pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';
        pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';

        document.getElementById("pregunta").innerHTML = pregunta_txt;
        preguntas.splice(indice_aleatorio,1);
    } else {
        window.location.href = "html/final.html" ;
    }
}

let puntaje = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if ( correcta === indice) {
        puntaje = puntaje + 5;
    }
    localStorage.setItem("Score",puntaje);

    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;
};

document.getElementById("siguientetriv").addEventListener("click", () => { clearInterval(interval), pregun ()});