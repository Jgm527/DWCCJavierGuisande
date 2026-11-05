function resaltarFilaPorNombre(nombre) {
    const celdas = Array.from(document.querySelectorAll('td'))

    const celdaEncontrada = celdas.find(td => 
        td.textContent && td.textContent.toLowerCase().includes(nombre.toLowerCase())
    )

    if (celdaEncontrada) {
        celdaEncontrada.innerHTML = `<strong>${celdaEncontrada.textContent}</strong>`;

        const filaPadre = celdaEncontrada.parentElement;
        if (filaPadre) {
            filaPadre.setAttribute('title', 'Alumno encontrado');
        }
    } else {
        console.log(`No se encontró ningún alumno llamado ${nombre}`);
    }
}

resaltarFilaPorNombre('Juan');
