function nombrarDia(dia) {
    switch (dia) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        default: return "Día no válido";
    }
}

console.log(nombrarDia(2));
