function pintarResultado() {
    let puntaje = localStorage.getItem("Score")
    let puntajeContenedor = document.getElementById("Score")
    
    if(puntaje === null) {
      puntajeContenedor. innerHTML =  0 + " puntos"
    } else {
      puntajeContenedor.innerHTML = localStorage.getItem("Score") + " puntos";
    }
     }
     pintarResultado()