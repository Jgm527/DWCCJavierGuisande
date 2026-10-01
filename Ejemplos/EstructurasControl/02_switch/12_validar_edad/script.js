function validarEdadEntrada(valor) {
    if (typeof valor !== "number") return "Error: introduce un número";
    if (valor < 0) return "Error: la edad no puede ser negativa";
    if (valor < 18) return "Acceso denegado: menor de edad";
    if (valor < 65) return "Acceso permitido: tarifa normal";
    return "Acceso permitido: tarifa reducida";
}

console.log(validarEdadEntrada("20"));
console.log(validarEdadEntrada(20));
console.log(validarEdadEntrada(-5));
