function clasificarNota(letra) {
    switch (letra) {
        case "A":
        case "B":
            return "Aprobado con mérito";
        case "C":
            return "Aprobado";
        case "D":
        case "F":
            return "Suspenso";
        default:
            return "Nota no válida";
    }
}

console.log(clasificarNota("B"));
console.log(clasificarNota("F"));
