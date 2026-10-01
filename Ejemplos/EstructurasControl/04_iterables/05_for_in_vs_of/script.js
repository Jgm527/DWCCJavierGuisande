const numeros = [1, 2, 3];

for (const i in numeros) {
    console.log("in:", i, typeof i);
}

for (const i of numeros) {
    console.log("of:", i, typeof i);
}
