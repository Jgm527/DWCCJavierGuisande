/**
 * Calcula el precio final de un producto aplicando descuentos.
 *
 * Si el precio es superior a 100 €, se aplica un 5 % de descuento.
 * Si además el cliente es VIP, se aplica otro 5 % de descuento.
 *
 * @param {number} precio - Precio inicial del producto.
 * @param {boolean} esClienteVip - Indica si el cliente tiene categoría VIP.
 * @returns {string|null} Precio final con dos decimales o null si los datos no son válidos.
 */
function calcularDescuento(precio, esClienteVip) {

    // Comprobamos que el precio sea un número y que no sea negativo.
    if (precio < 0 || typeof precio !== 'number') {
        console.error('El precio no puede ser negativo');
        return null;
    }

    // Comprobamos que esClienteVip sea un valor booleano (true o false).
    if (typeof esClienteVip !== 'boolean') {
        console.error('El parámetro esClienteVip debe ser del tipo boolean');
        return null;
    }

    // Repetimos el proceso de descuento un máximo de 5 veces.
    for (let i = 0; i < 5; i++) {

        // Solo aplicamos el descuento si el precio es superior a 100 €.
        if (precio > 100) {

            // Aplicamos un descuento del 5 % al precio actual.
            precio = precio - (precio * 0.05);

            // Si el cliente es VIP, aplicamos un segundo descuento del 5 %.
            if (esClienteVip) {
                precio = precio - (precio * 0.05);
            }
        }
    }

    // Devolvemos el precio redondeado a dos decimales.
    return precio.toFixed(2);
}

// Llamamos a la función con un precio de 150 € y un cliente VIP.
// El resultado se muestra por consola.
console.log(calcularDescuento(150, true));