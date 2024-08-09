const preguntas = [
    {
        pregunta:"¿Quién fue la famosa heroína francesa conocida por liderar las tropas durante la Guerra de los Cien Años?",
        respuestas:["Juana de Arco","Isabel I de Castilla","Catalina de Aragón","María de Estuardo"],
        correcta: 0
    },
    {
        preguntas:"¿Cuál de los siguientes personajes es un héroe legendario de la mitología nórdica?",
        respuestas:["Thor","Gilgamesh","Beowulf","Robin Hood"],
        correcta:0
    },
    {
        preguntas:"¿Cuál es el nombre del héroe mitológico griego conocido por su fuerza sobrehumana?",
        respuestas:["Aquiles","Ulises","Hercúles","Perséo"],
        correcta:2
    },
    {
        preguntas:"¿Cuál de los siguientes líderes es conocido como el Libertador de varios países sudamericanos?",
        respuestas:["Simón Bolívar","José de San Martín","Miguel Hidalgo","Bernardo O'Higgins"],
        correcta:1
    },
    {
        preguntas:"¿Quién fue el héroe mítico de la fundación de Roma, según la leyenda romana?",
        respuestas:["Julio Cesár","Augusto Numa","Pompilio","Rómulo y Remo"],
        correcta:3
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
        window.location.href = "../resultado.html" ;
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