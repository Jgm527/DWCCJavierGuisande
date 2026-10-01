let edad = 17;
let autorizado = "true";
let acompanado = 0;

if (edad >= 18 || autorizado && !acompanado) {
    console.log("Puede entrar");
} else {
    console.log("No puede entrar");
}
