
const PUNTOS_RESULTADO = {
    victoria: 3,
    empate: 1,
    derrota: 0
}

const CATEGORIAS = [
    "PRINCIPIANTE",
    "INTERMEDIO",
    "AVANZADO",
    "EXPERTO"
]

// Crea un jugador con sus datos, partidas y bonificaciones.
function crearJugador(nombre, curso = "2.º DAW") {
    return {
        nombre,
        curso,
        partidas: [],
        bonificaciones: [],

        registrarPartida(resultado) {
            resultado = resultado.toLowerCase().trim()

            if (!Object.hasOwn(PUNTOS_RESULTADO, resultado)) {
                return false
            }

            this.partidas.push(resultado)
            return true
        },

        aplicarBonificaciones(...bonos) {
            const validos = bonos.filter(
                bono => Number.isFinite(bono) && bono > 0
            )

            this.bonificaciones.push(...validos)

            return validos.reduce((total, bono) => total + bono, 0)
        },

        contar(resultado) {
            return this.partidas.filter(
                partida => partida === resultado.toLowerCase().trim()
            ).length
        },

        puntos() {
            const puntosPartidas = this.partidas.reduce(
                (total, partida) => total + PUNTOS_RESULTADO[partida],
                0
            )

            const puntosBonificaciones = this.bonificaciones.reduce(
                (total, bono) => total + bono,
                0
            )

            return puntosPartidas + puntosBonificaciones
        },

        categoria() {
            const puntos = this.puntos()

            if (puntos <= 3) {
                return "PRINCIPIANTE"
            } else if (puntos <= 6) {
                return "INTERMEDIO"
            } else if (puntos <= 9) {
                return "AVANZADO"
            } else {
                return "EXPERTO"
            }
        },

        resumen() {
            return `Jugador: ${this.nombre}
Curso: ${this.curso}
Partidas jugadas: ${this.partidas.length}
Victorias: ${this.contar("victoria")}
Empates: ${this.contar("empate")}
Derrotas: ${this.contar("derrota")}
Bonificaciones: ${this.bonificaciones.reduce((total, bono) => total + bono, 0)}
Puntos obtenidos: ${this.puntos()}
Categoría: ${this.categoria()}`
        }
    }
}

// Busca un jugador por su nombre.
function buscarJugador(lista, nombre) {
    return lista.find(
        jugador => jugador.nombre.toLowerCase() === nombre.toLowerCase()
    )
}

// Devuelve la clasificación sin modificar el array original.
function clasificacion(lista) {
    return lista
        .map(jugador => ({
            nombre: jugador.nombre,
            puntos: jugador.puntos(),
            victorias: jugador.contar("victoria"),
            categoria: jugador.categoria()
        }))
        .sort((a, b) =>
            b.puntos - a.puntos ||
            b.victorias - a.victorias ||
            a.nombre.localeCompare(b.nombre, "es")
        )
        .map((jugador, indice) => ({
            posicion: indice + 1,
            nombre: jugador.nombre,
            puntos: jugador.puntos,
            categoria: jugador.categoria
        }))
}

// Agrupa los jugadores por categoría.
function jugadoresPorCategoria(lista) {
    const grupos = {
        PRINCIPIANTE: [],
        INTERMEDIO: [],
        AVANZADO: [],
        EXPERTO: []
    }

    lista.forEach(jugador => {
        grupos[jugador.categoria()].push(jugador.nombre)
    })

    return grupos
}

// Calcula las estadísticas generales del campeonato.
function estadisticas(lista) {
    const totales = lista.reduce(
        (acumulado, jugador) => ({
            partidas: acumulado.partidas + jugador.partidas.length,
            victorias: acumulado.victorias + jugador.contar("victoria"),
            empates: acumulado.empates + jugador.contar("empate"),
            derrotas: acumulado.derrotas + jugador.contar("derrota"),
            puntos: acumulado.puntos + jugador.puntos()
        }),
        {
            partidas: 0,
            victorias: 0,
            empates: 0,
            derrotas: 0,
            puntos: 0
        }
    )

    return {
        partidas: totales.partidas,
        victorias: totales.victorias,
        empates: totales.empates,
        derrotas: totales.derrotas,
        mediaPuntos: lista.length > 0
            ? Number((totales.puntos / lista.length).toFixed(2))
            : 0
    }
}

// Devuelve jugadores que han participado y no han perdido.
function invictos(lista) {
    return lista
        .filter(jugador =>
            jugador.partidas.length > 0 &&
            jugador.contar("derrota") === 0
        )
        .map(jugador => jugador.nombre)
}

// Muestra la clasificación de forma legible.
function mostrarClasificacion(lista) {
    console.log("\n========== CLASIFICACIÓN DEL CAMPEONATO ==========")

    clasificacion(lista).forEach(jugador => {
        console.log(
            `${jugador.posicion}. ${jugador.nombre} | ` +
            `${jugador.puntos} puntos | ${jugador.categoria}`
        )
    })
}

// Operaciones especiales: reciben los puntos y devuelven el resultado.
const duplicarPuntos = puntos => puntos * 2

const añadirPuntosExtra = (puntos, extra = 2) => puntos + extra

const aplicarPenalizacion = (puntos, penalizacion = 2) =>
    Math.max(0, puntos - penalizacion)

// Aplica una operación sin cambiar los jugadores originales.
function aplicarOperacion(lista, operacion) {
    return lista.map(jugador => ({
        nombre: jugador.nombre,
        puntos: operacion(jugador.puntos())
    }))
}

// Crea una copia independiente del jugador.
function copiarJugador(jugador) {
    const copia = crearJugador(jugador.nombre, jugador.curso)

    copia.partidas.push(...jugador.partidas)
    copia.bonificaciones.push(...jugador.bonificaciones)

    return copia
}

// Une varios campeonatos en un array nuevo.
function unirCampeonatos(...listas) {
    return listas.flat()
}

// Crea los jugadores y registra sus resultados.
const ana = crearJugador("Ana")
;["victoria", "victoria", "empate", "derrota", "victoria"]
    .forEach(resultado => ana.registrarPartida(resultado))
ana.aplicarBonificaciones(2)

const brais = crearJugador("Brais")
;["empate", "empate", "derrota", "victoria"]
    .forEach(resultado => brais.registrarPartida(resultado))

const carla = crearJugador("Carla")
;["victoria", "victoria", "victoria", "empate"]
    .forEach(resultado => carla.registrarPartida(resultado))

const diego = crearJugador("Diego")
;["victoria", "victoria", "empate", "empate", "empate", "empate"]
    .forEach(resultado => diego.registrarPartida(resultado))

const eva = crearJugador("Eva")
;["derrota", "derrota", "empate"]
    .forEach(resultado => eva.registrarPartida(resultado))
eva.aplicarBonificaciones(1, 1)

const fran = crearJugador("Fran")
;["victoria", "empate", "derrota"]
    .forEach(resultado => fran.registrarPartida(resultado))
fran.aplicarBonificaciones(3)

const jugadores = [ana, brais, carla, diego, eva, fran]

// Muestra la información del campeonato.
mostrarClasificacion(jugadores)

console.log("\n========== RESUMEN DE JUGADORES ==========")
jugadores.forEach(jugador => {
    console.log("\n" + jugador.resumen())
})

console.log("\n========== JUGADORES POR CATEGORÍA ==========")
console.log(jugadoresPorCategoria(jugadores))

console.log("\n========== ESTADÍSTICAS ==========")
console.log(estadisticas(jugadores))

console.log("\n========== JUGADORES INVICTOS ==========")
console.log(invictos(jugadores))

console.log("\n========== BÚSQUEDA DE JUGADOR ==========")
console.log(buscarJugador(jugadores, "Ana")?.resumen() ?? "Jugador no encontrado")

console.log("\n========== OPERACIONES ESPECIALES ==========")
console.log("Puntos duplicados:", aplicarOperacion(jugadores, duplicarPuntos))
console.log("Puntos extra:", aplicarOperacion(
    jugadores,
    puntos => añadirPuntosExtra(puntos, 5)
))
console.log("Con penalización:", aplicarOperacion(
    jugadores,
    puntos => aplicarPenalizacion(puntos, 2)
))

console.log("\n========== COPIA DE JUGADOR ==========")
const copiaAna = copiarJugador(ana)
copiaAna.registrarPartida("victoria")
copiaAna.aplicarBonificaciones(5)

console.log("Puntos de Ana original:", ana.puntos())
console.log("Puntos de la copia:", copiaAna.puntos())

console.log("\n========== UNIR CAMPEONATOS ==========")
const otroCampeonato = [crearJugador("Gonzalo")]
const campeonatoCompleto = unirCampeonatos(jugadores, otroCampeonato)
console.log("Total de participantes:", campeonatoCompleto.length)
