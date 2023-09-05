let edadesEjercicio1 = require("./Ejercicio1")

let acumulador = 0;
const sumaEdades = edadesEjercicio1.reduce((edad, otraEdad) => {
    return edad + otraEdad.edad
}, acumulador)

console.log(sumaEdades)
