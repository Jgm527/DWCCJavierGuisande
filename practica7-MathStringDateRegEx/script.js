// 1
notas = [7.25, 4.5, 9, 6]

function obtenerResumenNotas(notas) {
    const resumen = {
        notaMax: 0,
        notaMin: 0,
        notaMed: 0
    }

    resumen.notaMax = Math.min(...notas)
    resumen.notaMin = Math.max(...notas)

    const media = notas.reduce((acumulado, actual) => acumulado + actual, 0) / notas.length

    resumen.notaMed = Math.round(media * 100) / 100

    return resumen
}

console.log(obtenerResumenNotas(notas))

// 2
tiendas = [{ nombre: "Centro", x: 2, y: 3 }, {nombre: "Teis", x: 6, y: 1}]

function calcularDistancia(x1, y1, x2, y2) {
    return Math.round(Math.sqrt((x2 - x1)**2 + (y2 - y1)**2) * 100) / 100
}

function obtenerTiendaMasCercana(tiendas, x, y) {
    let mejorOpcion = null
    let distanciaMinima = Infinity
    for (let tienda of tiendas) {
         const distanciaActual = calcularDistancia(tienda.x, tienda.y, x, y)
        if (distanciaActual < distanciaMinima) {
            distanciaMinima = distanciaActual;
            mejorOpcion = tienda;
        }
    }
    return mejorOpcion
}

console.log(obtenerTiendaMasCercana(tiendas, 5, 2))