const preguntas = [
    {
        pregunta:"¿En qué año comenzó la Revolución Francesa?",
        respuestas:["1776","1789","1804","1812"],
        correcta:1
    },
    {
        preguntas:"¿Cuánto duró la guerra de los Cien Años?",
        respuestas:["116 años","10 años","100 años","99 años"],
        correcta:0
    },
    {
        preguntas:"¿Qué filósofo griego fue discípulo de Sócrates y maestro de Aristóteles?",
        respuestas:["Diógenes","Platón","Heráclito","Apolo"],
        correcta:  1
    },
    {
        preguntas:"¿Qué batalla marcó el final del dominio napoleónico en Europa en 1815?",
        respuestas:["Batalla de Austerlitz","Batalla de Barodino","Batalla de Leipzig","Batalla de Waterloo"],
        correcta: 3
    },
    {
        preguntas:"¿Cuál de los siguientes imperios no existió en la antigua Mesopotamia?",
        respuestas:["Imperio Acardio","Imperio Asirio","Imperio Hitita","Imperio Babilónico"],
        correcta:2
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