const resultados = {victorias: 0, derrotas: 0, empates: 0}

let salir = true

console.log("Programa de seguimiento de partidas - Camponato DAW")
let nombre = prompt("Introduce el nombre del jugador: ")

while (salir == true) {
    console.log("1. Añadir partida")
    console.log("2. Mostrar partidas")
    console.log("3. Salir")
    let opcion = prompt("Elige una opción: ")
    switch (opcion) {
        case "1":
            añadirPartida()
            break
        case "2":
            mostrarPartidas()
            break
        case "3":
            mostrarResultados()
            salir = false
            break
        default:
            console.log("Opción no válida")
    }
}

function añadirPartida() { 
    console.log("=============Añadir partida=============")
    let resultado = prompt("Introduce el resultado de la partida (victoria (V), derrota (D), empate (E)): ")
    switch (resultado.toUpperCase()) {
        case "V":
            resultados.victorias++
            console.log("victoria añadida")
            break
        case "D":
            resultados.derrotas++
            console.log("derrota añadida")
            break
        case "E":
            resultados.empates++
            console.log("empate añadido")
            break
        default:
            console.log("Resultado no válido")
    }
}

function mostrarPartidas() {
    console.log("=============Mostrar partidas=============")
    console.log(`Victorias: ${resultados.victorias}`)
    console.log(`Derrotas: ${resultados.derrotas}`)
    console.log(`Empates: ${resultados.empates}`)
}

function mostrarResultados() {
    console.log("=============Mostrar resultados=============")
    console.log(`Nombre del jugador: ${nombre}`)
    console.log(`Victorias: ${resultados.victorias}`)
    console.log(`Derrotas: ${resultados.derrotas}`)
    console.log(`Empates: ${resultados.empates}`)
    console.log(`Total de partidas: ${resultados.victorias + resultados.derrotas + resultados.empates}`)
    let nota = calcularCalificacion(resultados)

    if (nota >= 0 && nota <= 3) {
        console.log("Calificación: PRINCIPIANTE")
    } else if (nota >= 4 && nota <= 6) {
        console.log("Calificación: INTERMEDIO")
    } else if (nota >= 7 && nota <= 9) {
        console.log("Calificación: AVANZADO")
    } else if (nota >= 10) {
        console.log("Calificación: EXPERTO")
    }
}

function calcularCalificacion(resultados) {
    let total = 0
    total += resultados.victorias * 3
    total += resultados.empates * 1
    total += resultados.derrotas * 0
    return total
}