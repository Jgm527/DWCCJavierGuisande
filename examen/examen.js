const DIAS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const temperaturas = [18, 22, 24, 19, 27, 30, 21];
const inventario = { teclado: 5, raton: 12, monitor: 2 };
const PRECIO_BASE = 8;
const EDAD_INFANTIL = 12;
const RECARGO_FIN_DE_SEMANA = 1.5;
const DIA_DEL_ESPECTADOR = "miércoles";
const DESCUENTO_ESPECTADOR = 2;
const carrito = [
{ producto: "pan", precio: 1.5, cantidad: 3 },
{ producto: "leche", precio: 2, cantidad: 6 },
{ producto: "queso", precio: 4.5, cantidad: 1 },
{ producto: "fruta", precio: 0.75, cantidad: 4 }
];

// 1 Revisar casos limite - recorrer indice
function diasPorEncimaDe(temperaturas, umbral) {
    const diasPorEncima = []
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > umbral) {
            diasPorEncima.push(DIAS[i])
        }
    }
    return diasPorEncima
}
console.log(diasPorEncimaDe(temperaturas, 20));


const prueba = new Date()

console.log(prueba.getDay);