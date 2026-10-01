function calcularEnvio(metodo) {
    switch (metodo) {
        case "estandar":
            return 3.99;
        case "express":
            return 7.99;
        case "recogida":
        case "tienda":
            return 0;
        default:
            return null;
    }
}

console.log(calcularEnvio("express"));
console.log(calcularEnvio("tienda"));
