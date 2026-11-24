/**
 * Origen al que se envía la nota; debe coincidir con el de la página principal.
 */
const ORIGEN = 'http://127.0.0.1:5500';

const params = new URLSearchParams(window.location.search);
const idAlumno = params.get('id');
const nombreAlumno = params.get('nombre') || 'Alumno desconocido';
const notaAlumno = params.get('nota') || '0';

document.getElementById('nombreAlumno').value = nombreAlumno;
document.getElementById('notaAlumno').value = Number(notaAlumno);

/**
 * Escribe un mensaje en el párrafo de estado de la ficha.
 * @param {string} texto Texto que se muestra.
 * @param {boolean} esError Indica si el mensaje es un error (se muestra en rojo).
 * @returns {void}
 */
function mostrarMensaje(texto, esError) {
    const mensajeEstado = document.getElementById('mensajeEstado');
    mensajeEstado.textContent = texto;
    mensajeEstado.style.color = esError ? '#b00020' : '#1e7b34';
}

/**
 * Valida la nota, comprueba que la ficha está dentro de una página padre
 * y la envía a la página principal mediante postMessage.
 * @returns {null|true} null si la nota no es válida o no hay página padre; true si se envía.
 */
function guardarNota() {
    const campoNota = document.getElementById('notaAlumno');
    const valor = campoNota.value.trim();

    // Se comprueba el campo vacío antes de convertirlo: Number('') vale 0
    if (valor === '') {
        mostrarMensaje('Introduce una nota válida (0-10).', true);
        return null;
    }

    const nota = Number(valor);

    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
        mostrarMensaje('Introduce una nota válida (0-10).', true);
        return null;
    }

    if (window.parent === window) {
        mostrarMensaje('Esta ficha se abrió sin ventana de origen.', true);
        return null;
    }

    window.parent.postMessage(
        { tipo: 'actualizarNota', idAlumno: idAlumno, nota: nota },
        ORIGEN
    );

    mostrarMensaje('Nota enviada correctamente.', false);
    return true;
}

// Permite cerrar el marco con Escape aunque el foco esté dentro de la ficha
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && window.parent !== window) {
        window.parent.postMessage({ tipo: 'cerrarFicha' }, ORIGEN);
    }
});
