const preguntas = [
    {
        pregunta:"¿Qué país es conocido por su tradición de celebrar el Día de los Muertos, una festividad que honra a los difuntos con altares y ofrendas?",
        respuestas: ["India", "México", "Egipto", "Brasil"],
        correcta: 1
    },
    {
      pregunta: "¿Cuál de los siguientes países es conocido por su tradición de las artes marciales como el karate, judo y sumo?",
      respuestas: ["China", "Corea del Sur", "Japón", "Tailandia"],
      correcta: 2
    },
    {
        pregunta: "¿Qué país es famoso por su festival de Oktoberfest, una celebración anual de la cerveza que atrae a visitantes de todo el mundo?",
        respuestas: ["Suiza", "Alemania", "Austria", "Bélgica"],
        correcta: 1
    },
    {
        pregunta: "¿Qué país es famoso por su folklore y mitología que incluye historias de leprechauns,duendes y hadas?",
        respuestas: ["Islandia", "Grecia", "Escocia", "Irlanda"],
        correcta: 3
    },
    {
       pregunta: "¿Cuál es el país de origen de la ópera,un género de música teatral que combina música vocal e instrumental con actuación dramática?",
       respuestas: ["Italia", "Francia", "Alemania", "Rusia"],
      correcta: 0
    },
  
  ];
  
  let indice_aleatorio = 0;
  
  let pregunta_txt = "";
  
  let interval;
  
  window.onload = iniciar();
  
  function iniciar() {
      loadQuestions();
      if (localStorage.getItem("SCORE") != null) {
          localStorage.removeItem("SCORE");
      }
      }
  
  function iniciarCronometro() {
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")
  
    iniciarTiempo(contador, cronometroDisplay)
  
  }
  
  function iniciarTiempo(duracion, componente) {
      interval = setInterval(() => {
      if (duracion === 0) {
  
        componente.innerHTML = "Se acabó el tiempo";
  
        clearInterval(interval);
  
        loadQuestions()
  
      } else {
  
        duracion = duracion < 10 ? "0" + duracion : duracion;
  
        componente.textContent = "00:" + duracion;
  
        duracion--;
      }
      }, 1000)
  
  }
  
  function loadQuestions() {
     iniciarCronometro();
  
      if (preguntas.length > 0) {
  
          indice_aleatorio = Math.floor(Math.random() * preguntas.length);
  
          pregunta_txt = "";
  
          pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';
  
          pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';
  
          pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';
  
          pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';
  
          pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';
  
  
  
          document.getElementById("pregunta").innerHTML = pregunta_txt;
  
          preguntas.splice(indice_aleatorio, 1);
  
      } else {
          window.location.href = "../html/resultado.html";
      }
  }
  
  let puntos = 0;
  
  function verificarRespuestaCorrecta(indice, correcta) {
      if (correcta === indice) {
          puntos = puntos + 10;      
      }
  
      localStorage.setItem("SCORE", puntos);
  
      document.getElementById("opcion0").disabled = true;
      document.getElementById("opcion1").disabled = true;
      document.getElementById("opcion2").disabled = true;
      document.getElementById("opcion3").disabled = true;
  }
  
  document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });