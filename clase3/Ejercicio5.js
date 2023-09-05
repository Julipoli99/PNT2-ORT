const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];


const nuevosPersonajes = [
    { nombre: "Krusty", edad: 55, rol: "Comediante" },
    { nombre: "Burns", edad: 2500, rol: "Jefe de la planta nuclear" },
    { nombre: "Skinner", edad: 50, rol: "Director de escuela" }
]

const personajesUnidos = [...personajesSimpsons, ...nuevosPersonajes];

console.log(personajesUnidos);