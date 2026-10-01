const edades = [15, 22, 8, 45, 17, 30];
const edadMinima = 16;

for (const edad of edades) {
    if (edad < 0 || edad > 120) {
        console.log("Edad no válida, se ignora:", edad);
        continue;
    }

    if (edad < edadMinima) {
        console.log(edad + " años - No puede acceder");
    } else {
        console.log(edad + " años - Acceso permitido");
    }
}
