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

console.log("====Ejercicio 1====")
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

console.log("====Ejercicio 2====")
console.log(obtenerTiendaMasCercana(tiendas, 5, 2))

// 3
function crearSlug(titulo) {
    titulo = titulo.trim().toLowerCase().replaceAll(/\s+/g, "-")
    return titulo
}

console.log("====Ejecicio 3====")
console.log(crearSlug(" Arrow Functions   en JavaScript "))

// 4
function ocultarEmail(email) {
    if (!email.includes("@")) {
        return null
    }
    const [usuario, dominio] = email.trim().split("@")
    const visible = usuario.substring(0, 2);
    const oculto = "*".repeat(usuario.length - 2);
    return visible + oculto + "@" + dominio.toLowerCase();
}

console.log("====Ejercicio 4====")
console.log(ocultarEmail(" Ana.Garcia@IESTeis.es"))
console.log(ocultarEmail("sin-arroba"))

// 5
const hoy = new Date(2026, 9, 21)

function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias)
    
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    const fechaFormada = `${dia}/${mes}/${año}`

    return fechaFormada
}

console.log("====Ejercicio 5====")
console.log(sumarDias(hoy, 15))
console.log(sumarDias(hoy, 72))


const hoyCumple = new Date(2026, 9, 23)

function obtenerInfoCumpleaños(nacimiento, hoyCumple) {
    if (nacimiento.getDate() == hoyCumple.getDate() && nacimiento.getMonth() == hoyCumple.getMonth()) {
        const anhos = hoyCumple.getFullYear() - nacimiento.getFullYear()
        const mensaje = `Hoy es tu cumpleaños! Cumples ${anhos} años`
        return mensaje
    }
    let proximoCumple = new Date(hoyCumple.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

    if (proximoCumple < hoyCumple) {
        proximoCumple.setFullYear(hoyCumple.getFullYear() + 1);
    }

    const diferenciaMilisegundos = proximoCumple - hoyCumple;
    const diasFaltan = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    const fechaFormateada = `${proximoCumple.getDate()}/${proximoCumple.getMonth() + 1}/${proximoCumple.getFullYear()}`;

    const opcionesDia = { weekday: 'long' };
    const diaSemana = proximoCumple.toLocaleDateString('es-ES', opcionesDia);

    return `El ${diaSemana} ${fechaFormateada}: faltan ${diasFaltan} días`;
}

console.log("====Ejercicio 6====")
console.log(obtenerInfoCumpleaños(new Date(2008, 2, 4), hoyCumple))
console.log(obtenerInfoCumpleaños(new Date(2005, 9, 23), hoyCumple))