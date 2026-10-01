const pedidos = [
 { cliente: "Ana", importe: 15, metodoPago: "VISA" },
 { cliente: "Brais", importe: 42, metodoPago: "PAYPAL" },
 { cliente: "Carla", importe: 75, metodoPago: "VISA" },
 { cliente: "Diego", importe: 0, metodoPago: "EFECTIVO" },
 { cliente: "Eva", importe: 120, metodoPago: "PAYPAL" }
];

for (pedido of pedidos) {
    if (pedido.importe === 0) {
        console.log(`Pedido de ${pedido.cliente} ignorado: importe no válido.`);
        continue;
    } else if (pedido.importe < 20) {
        console.log(`${pedido.cliente} - ${pedido.importe} EUR - Pedido pequeno.`);
    } else if (pedido.importe >= 20 && pedido.importe <= 50) {
        console.log(`${pedido.cliente} - ${pedido.importe} EUR - Pedido medio.`);
    } else {
        console.log(`${pedido.cliente} - ${pedido.importe} EUR - Pedido grande.`);
    }

    switch (pedido.metodoPago) {
    case "VISA":
        console.log("Pago con tarjeta");
        break;
    case "PAYPAL":
        console.log("Pago con PAYPAL.");
        break;
    case "EFECTIVO":
        console.log("Pago en efectivo.");
        break;
    default:
        console.log("Metodo de pago desconocido.");
    }
}



