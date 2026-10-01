const numeros = [1, 45, 3, 4, 123, 7, 10];

for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] >= 20) continue;
    if (numeros[i] % 2 === 0) continue;
    console.log(numeros[i]);
}
