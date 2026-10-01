let numero;

do {
    numero = Number(prompt("Introduce un número (1-50):"));
} while (isNaN(numero) || numero < 1 || numero > 50);

console.log("Número introducido:", numero);
