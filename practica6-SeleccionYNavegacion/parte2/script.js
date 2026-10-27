function contarHermanosCompletos(cursoActual) {
    let contador = 0;

    let anterior = cursoActual.previousElementSibling;
    while (anterior) {
        if (anterior.getAttribute('data-plazas') === '0') {
            contador++;
        }
        anterior = anterior.previousElementSibling;
    }

    let siguiente = cursoActual.nextElementSibling;
    while (siguiente) {
        if (siguiente.getAttribute('data-plazas') === '0') {
            contador++;
        }
        siguiente = siguiente.nextElementSibling;
    }

    return contador;
}
