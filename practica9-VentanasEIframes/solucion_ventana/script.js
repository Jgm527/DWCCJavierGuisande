/**
 * Origen permitido para los mensajes de la ficha.
 * Debe coincidir exactamente con el origen desde el que se sirve la página.
 */
const ORIGEN = 'http://127.0.0.1:5500';

const alumnosIniciales = [
    { nombre: 'Pedro Rodríguez', curso: 'DAW Superior', nota: 5, id: '101' },
    { nombre: 'Laura Jiménez', curso: 'DAM Superior', nota: 7, id: '102' },
    { nombre: 'María Álvarez', curso: 'ASIR Superior', nota: 9, id: '103' }
];

/**
 * Abre la ficha del alumno en una ventana nueva.
 * Construye la URL con el id, el nombre y la nota del alumno.
 * @param {object} alumno Objeto con los datos del alumno.
 * @returns {null|true} null si el alumno no es un objeto o la ventana no se abre; true si se abre la ficha.
 */
function abrirFicha(alumno) {
    if (!alumno || typeof alumno !== 'object') {
        return null;
    }

    const url = 'ficha-alumno.html?id=' + encodeURIComponent(alumno.id) +
        '&nombre=' + encodeURIComponent(alumno.nombre) +
        '&nota=' + encodeURIComponent(alumno.nota);

    const ventanaFicha = window.open(url, '_blank', 'width=500,height=600');

    return ventanaFicha ? true : null;
}

/**
 * Crea una fila por alumno en la tabla, con las celdas de nombre, curso,
 * nota y el botón «Ver ficha».
 * @param {Array<object>} alumnos Lista de alumnos que se muestran en la tabla.
 * @returns {void}
 */
function inicializarAlumnos(alumnos) {
    const tbody = document.querySelector('#tabla-alumnos tbody');

    if (!tbody) {
        console.error('No se encontró el elemento #tabla-alumnos tbody');
        return;
    }

    // Se vacía la tabla antes de volver a crearla (innerHTML solo con cadena vacía)
    tbody.innerHTML = '';

    for (const alumno of alumnos) {
        const fila = document.createElement('tr');
        fila.dataset.alumnoId = alumno.id;

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = alumno.nombre;

        const celdaCurso = document.createElement('td');
        celdaCurso.textContent = alumno.curso;

        const celdaNota = document.createElement('td');
        celdaNota.textContent = alumno.nota;

        const celdaAccion = document.createElement('td');
        const botonAccion = document.createElement('button');
        botonAccion.type = 'button';
        botonAccion.textContent = 'Ver ficha';
        botonAccion.addEventListener('click', () => {
            abrirFicha(alumno);
        });
        celdaAccion.append(botonAccion);

        fila.append(celdaNombre, celdaCurso, celdaNota, celdaAccion);
        tbody.append(fila);
    }
}

/**
 * Busca la fila del alumno y actualiza su celda de nota.
 * También guarda la nota en memoria para que la ficha se reabra con el valor vigente.
 * @param {string} idAlumno Identificador del alumno.
 * @param {number} nuevaNota Nota nueva, ya validada.
 * @returns {null|true} null si los tipos no son correctos o no existe la fila; true si se actualiza.
 */
function actualizarNotaEnTabla(idAlumno, nuevaNota) {
    if (typeof idAlumno !== 'string' || typeof nuevaNota !== 'number' || !Number.isFinite(nuevaNota)) {
        return null;
    }

    const fila = document.querySelector(
        '#tabla-alumnos tbody tr[data-alumno-id="' + CSS.escape(idAlumno) + '"]'
    );

    if (!fila || !fila.cells[2]) {
        return null;
    }

    fila.cells[2].textContent = nuevaNota;

    const alumno = alumnosIniciales.find((dato) => dato.id === idAlumno);
    if (alumno) {
        alumno.nota = nuevaNota;
    }

    return true;
}

window.addEventListener('message', (evento) => {
    if (evento.origin !== ORIGEN) {
        return;
    }

    if (!evento.data || evento.data.tipo !== 'actualizarNota') {
        return;
    }

    actualizarNotaEnTabla(evento.data.idAlumno, evento.data.nota);
});

inicializarAlumnos(alumnosIniciales);
