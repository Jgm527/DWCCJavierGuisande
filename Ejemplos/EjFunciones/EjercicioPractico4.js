function esPrimo(numero, mostrarDivisores = false) {
    if (typeof numero !== 'number' || typeof mostrarDivisores !== 'boolean') {
        console.error('Los parámetros deben ser del tipo correcto');
        return null;
    }

    if (mostrarDivisores) console.log(1);

    if (numero <= 1) {
        if (mostrarDivisores) console.log(numero);
        return false;
    }

    let esPrimo = true;

    for (let i = 2; i <= numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            if (mostrarDivisores) {
                console.log(i);
            }
        }
    }

    return esPrimo;
}

console.log(esPrimo(168, true));