function codigoAlumno(apellido) {
    const tresLetras = apellido.substring(0, 3).toUpperCase();
    const anioActual = new Date().getFullYear();
    const numRandom = Math.floor(100 + Math.random() * 900);

    const codigoGenerado = `${tresLetras}-${anioActual}-${numRandom}`;

    const regexValidacion = /^\p{L}{3}-\d{4}-\d{3}$/u;

    const esValido = regexValidacion.test(codigoGenerado);

    return {
        codigo: codigoGenerado,
        valido: esValido
    };
}

console.log(codigoAlumno("García"));
console.log(codigoAlumno("Pérez"));