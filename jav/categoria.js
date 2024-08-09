function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()
const temas = [
    "Historia", "Historia Universal", "Héroes"
]