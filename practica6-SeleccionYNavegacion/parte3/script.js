function resaltarFilaPorNombre(nombre) {
    const celdas = document.querySelectorAll('td');
    let celdaEncontrada = null;

    for (let td of celdas) {
        if (td.textContent && td.textContent.includes(nombre)) {
            celdaEncontrada = td;
            break;
        }
    }

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
