let opcion;

do {
    opcion = prompt("Menú:\n1. Ver perfil\n2. Editar\n3. Salir\nElige una opción:");
    if (opcion === "1") console.log("Mostrando perfil...");
    else if (opcion === "2") console.log("Editando...");
} while (opcion !== "3");

console.log("Saliendo del menú");
