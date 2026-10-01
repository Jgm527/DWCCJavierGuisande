let nota = 9.5;

switch (true) {
    case nota < 5:
        console.log("Suspenso");
        break;
    case nota <= 7:
        console.log("Notable");
        break;
    case nota <= 9:
        console.log("Sobresaliente");
        break;
    default:
        console.log("Matrícula");
}
