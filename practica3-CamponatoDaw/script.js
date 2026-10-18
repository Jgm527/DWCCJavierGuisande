
const resultados = {
    victorias: 0,
    derrotas: 0,
    empates: 0,
    bonificaciones: 0,
    puntosExtra: 0,
    penalizaciones: 0
}

let salir = true

console.log("Programa de seguimiento de partidas - Campeonato DAW")

const nombre = prompt("Introduce el nombre del jugador: ")

while (salir) {
    console.log("\n============= MENÚ PRINCIPAL =============")
    console.log("1. Añadir partida")
    console.log("2. Mostrar partidas")
    console.log("3. Añadir bonificación")
    console.log("4. Realizar operación especial")
    console.log("5. Mostrar resultados finales")
    console.log("6. Salir")

    const opcion = prompt("Elige una opción: ")

    switch (opcion) {
        case "1":
            añadirPartida()
            break
        case "2":
            mostrarPartidas()
            break
        case "3":
            añadirBonificacion()
            break
        case "4":
            realizarOperacion()
            break
        case "5":
            mostrarResultados()
            break
        case "6":
            mostrarResultados()
            salir = false
            break
        default:
            console.log("Opción no válida")
    }
}


function añadirPartida() {
    console.log("\n============= AÑADIR PARTIDA =============")

    const resultado = prompt(
        "Introduce el resultado (victoria (V), derrota (D), empate (E)): "
    )

    if (resultado === null) {
        console.log("Operación cancelada")
        return
    }

    switch (resultado.trim().toUpperCase()) {
        case "V":
            resultados.victorias++
            console.log("Victoria añadida")
            break
        case "D":
            resultados.derrotas++
            console.log("Derrota añadida")
            break
        case "E":
            resultados.empates++
            console.log("Empate añadido")
            break
        default:
            console.log("Resultado no válido. No se ha contabilizado la partida.")
            return
    }

    console.log("Partida registrada correctamente")
}


function añadirBonificacion() {
    console.log("\n============= AÑADIR BONIFICACIÓN =============")

    const cantidad = Number(
        prompt("¿Cuántos puntos de bonificación deseas añadir?")
    )

    if (!Number.isFinite(cantidad) || cantidad <= 0) {
        console.log("Debes introducir un número mayor que 0")
        return
    }

    resultados.bonificaciones += cantidad

    console.log(`Bonificación añadida: ${cantidad} puntos`)
    console.log(`Total de bonificaciones: ${resultados.bonificaciones}`)
}


function mostrarPartidas() {
    console.log("\n============= MOSTRAR PARTIDAS =============")
    console.log(`Victorias: ${resultados.victorias}`)
    console.log(`Derrotas: ${resultados.derrotas}`)
    console.log(`Empates: ${resultados.empates}`)
    console.log(`Total de partidas: ${contarPartidas(
        resultados.victorias,
        resultados.derrotas,
        resultados.empates
    )}`)
}


function realizarOperacion() {
    console.log("\n============= OPERACIONES ESPECIALES =============")
    console.log("1. Duplicar los puntos")
    console.log("2. Añadir puntos extra")
    console.log("3. Aplicar una penalización")

    const opcion = prompt("Elige una operación: ")

    switch (opcion) {
        case "1":
            resultados.puntosExtra += calcularPuntos() + resultados.bonificaciones
            resultados.bonificaciones = 0
            resultados.puntosExtra *= 2
            console.log("Se han duplicado los puntos")
            break

        case "2": {
            const cantidad = Number(prompt("¿Cuántos puntos extra deseas añadir?"))

            if (!Number.isFinite(cantidad) || cantidad <= 0) {
                console.log("Debes introducir un número mayor que 0")
                return
            }

            resultados.puntosExtra += cantidad
            console.log(`${cantidad} puntos extra añadidos`)
            break
        }

        case "3": {
            const cantidad = Number(prompt("¿Cuántos puntos deseas penalizar?"))

            if (!Number.isFinite(cantidad) || cantidad <= 0) {
                console.log("Debes introducir un número mayor que 0")
                return
            }

            resultados.penalizaciones += cantidad
            console.log(`Penalización aplicada: ${cantidad} puntos`)
            break
        }

        default:
            console.log("Operación no válida")
    }
}


function calcularPuntos({victorias = 0, empates = 0, derrotas = 0 } = {}) {
    return victorias * 3 + empates - derrotas * 0
}


function contarPartidas(victorias = 0, derrotas = 0, empates = 0) {
    return victorias + derrotas + empates
}


function calcularPuntuacion(datos = resultados) {
    return Math.max(
        0,
        calcularPuntos(datos) +
        datos.bonificaciones +
        datos.puntosExtra -
        datos.penalizaciones
    )
}

function calcularCalificacion(puntos) {
    if (puntos <= 3) {
        return "PRINCIPIANTE"
    } else if (puntos <= 6) {
        return "INTERMEDIO"
    } else if (puntos <= 9) {
        return "AVANZADO"
    } else {
        return "EXPERTO"
    }
}

function mostrarResultados() {
    console.log("\n============= RESULTADOS FINALES =============")

    const partidas = contarPartidas(
        resultados.victorias,
        resultados.derrotas,
        resultados.empates
    )

    const puntosPartidas = calcularPuntos(resultados)
    const puntosTotales = calcularPuntuacion()
    const categoria = calcularCalificacion(puntosTotales)

    console.log(`Nombre del jugador: ${nombre || "Sin nombre"}`)
    console.log(`Victorias: ${resultados.victorias}`)
    console.log(`Derrotas: ${resultados.derrotas}`)
    console.log(`Empates: ${resultados.empates}`)
    console.log(`Partidas jugadas: ${partidas}`)
    console.log(`Puntos por partidas: ${puntosPartidas}`)
    console.log(`Bonificaciones: ${resultados.bonificaciones}`)
    console.log(`Puntos extra: ${resultados.puntosExtra}`)
    console.log(`Penalizaciones: ${resultados.penalizaciones}`)
    console.log(`Puntuación total: ${puntosTotales}`)
    console.log(`Categoría: ${categoria}`)
}

const esNumeroPositivo = cantidad =>
    Number.isFinite(cantidad) && cantidad > 0

function sumarPuntos(...cantidades) {
    return cantidades.reduce((total, cantidad) => total + cantidad, 0)
}

const puntuacionesEjemplo = [3, 1, 2]
console.log("Ejemplo de suma de puntos:", sumarPuntos(...puntuacionesEjemplo))
