const numeros = [4, 9, 15, 22, 7];

for (const n of numeros) {
    if (n > 20) {
        console.log("Encontrado uno mayor que 20:", n);
        break;
    }
    console.log("Revisando:", n);
}
