/*
Ejercicio 4: Cambiar el rol de los personajes
Utilizar el método map y destructuring para crear un nuevo array a partir del array
del Ejercicio 1, en el cual el rol de los personajes menores de edad sea cambiado a
"Estudiante". Mostrar el nuevo array en la consola
*/
let arrayEjercicio1 = require("./Ejercicio1");

const rolesCambiados = arrayEjercicio1.map(personaje => {
    const { nombre, edad, rol} = personaje;

    if (edad < 18) {
        return { nombre, edad, rol: "Estudiante" };
    }

    return {nombre, edad, rol}
})


console.log(rolesCambiados);