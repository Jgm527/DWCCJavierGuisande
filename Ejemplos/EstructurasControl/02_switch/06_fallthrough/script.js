let dia = 4;
let franjaSemana;

switch (dia) {
    case 1:
    case 2:
    case 3:
        franjaSemana = "Principio";
        break;
    case 4:
    case 5:
        franjaSemana = "Final";
        // sin break
    default:
        franjaSemana = "Fin de semana";
}
console.log(franjaSemana);
