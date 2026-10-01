function clasificarTemperatura(grados) {
    if (typeof grados !== "number") return "dato inválido";
    if (grados < 0) return "helada";
    if (grados < 15) return "frío";
    if (grados < 25) return "templado";
    return "calor";
}

console.log(clasificarTemperatura(12));
console.log(clasificarTemperatura(30));
console.log(clasificarTemperatura("12"));
