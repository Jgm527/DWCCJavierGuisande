const numeros = [1, 2, 3, 4, 5, 6];

for (const n of numeros) {
    if (n % 2 !== 0) {
        continue;
    }
    console.log("Par:", n);
}
