let arrayEjercicio1 = require("./Ejercicio1")

const nombres = arrayEjercicio1.map(personaje => {
    return personaje.nombre
})

console.log(nombres);