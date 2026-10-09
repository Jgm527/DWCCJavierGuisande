//1
const notas = [3.5, 4.7, 3.2, 10, 9.4]
const aprobadas = notas.reduce((acum, nota) => acum + nota, 0)/notas.length

console.log(aprobadas)

//2
const nuevoArray = notas.filter(nota => nota >= 5);

console.log(nuevoArray)

//3
const otroArray = notas.map(nota => nota + 1);

console.log(otroArray)
console.log(notas)


//4
console.log(notas.find(nota => nota >= 9))

//5
const alumnos = [
    {nombre: "Pepito", nota: 5.7},
    {nombre: "Juanita", nota: 7.8},
    {nombre: "Alejandro", nota: 3.2},
    {nombre: "Rubén", nota: 4.5}
]

alumnos.forEach(alumno => {
    if (alumno.nota >= 5)
        console.log(alumno.nombre)
})

//alumnos.forEach(alumno => alumno.nota >= 5 && console.log(alumno.nombre));

