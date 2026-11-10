// 1
const alumnosIniciales = [
 { nombre: 'Pedro Rodríguez', curso: 'DAW Superior', id: 101 },
 { nombre: 'Laura Jiménez', curso: 'DAM Superior', id: 102 },
 { nombre: 'María Álvarez', curso: 'ASIR Superior', id: 103 }
]

function inicializarAlumnos(alumnos) {
    const tabla = document.querySelector("table tbody") || document.querySelector("table");

    tabla.innerHTML = "";

    for (const alumno of alumnos) {
        const nuevaFila = document.createElement("tr");
        nuevaFila.classList.add("alumno");
        nuevaFila.setAttribute("data-alumno-id", alumno.id);

        nuevaFila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.curso}</td>
        `

        tabla.appendChild(nuevaFila);

    }
}

inicializarAlumnos(alumnosIniciales)

// 2
function anadirAlumno(nombre, curso) {
    const tabla = document.querySelector("table tbody") || document.querySelector("table");

    const filasAlumnos = document.querySelectorAll("tr.alumno");
    let maxId = 0;

    filasAlumnos.forEach(fila => {
        const idActual = parseInt(fila.getAttribute("data-alumno-id"), 10);
        if (!isNaN(idActual) && idActual > maxId) {
            maxId = idActual;
        }
    });

    const nuevoId = maxId + 1;

    const nuevaFila = document.createElement("tr");
    nuevaFila.classList.add("alumno");
    nuevaFila.setAttribute("data-alumno-id", nuevoId);

    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${curso}</td>
    `

    tabla.appendChild(nuevaFila);

    return {
        nombre: nombre,
        curso: curso,
        id: nuevoId
    };
}

console.log(anadirAlumno("Juanjo Jiménez", "DAW"));


// 3
function eliminarAlumnoPorId(id) {
    const tabla = document.querySelector("table tbody") || document.querySelector("table");
    const filasAlumnos = document.querySelectorAll("tr.alumno");
    let borrado = false

    filasAlumnos.forEach(fila => {
        const idActual = parseInt(fila.getAttribute("data-alumno-id"), 10);
        if (!isNaN(idActual) && idActual === id) {
            tabla.deleteRow(fila.rowIndex - 1);
            borrado = true
        }
    });
    return borrado
}

console.log(eliminarAlumnoPorId(104));

// 4
// function eliminarAlumnoPorNombre(nombre) {
//     let borrado = false
//     const tabla = document.querySelector("table tbody") || document.querySelector("table");
//     const filasAlumnos = document.querySelectorAll("tr.alumno");

//     filasAlumnos.forEach(fila => {
//         const nombreActural = fila.firstElementChild.innerText
//         if (nombreActural === nombre) {
//             tabla.deleteRow(fila.rowIndex - 1);
//             borrado = true
//         }
//     });
//     return borrado
// }

// anadirAlumno('Juan Fdez', 'SBD');
// anadirAlumno('Juan Fdez', 'SBD');

// console.log(eliminarAlumnoPorNombre('Juan Fdez')); 

// 5
function eliminarAlumnoPorNombre(nombre, expresion = false) {
    let borrado = false
    const tabla = document.querySelector("table tbody") || document.querySelector("table");
    const filasAlumnos = document.querySelectorAll("tr.alumno");

    filasAlumnos.forEach(fila => {
        const nombreActural = fila.firstElementChild.innerText
        if (nombreActural === nombre && expresion === false) {
            tabla.deleteRow(fila.rowIndex - 1);
            borrado = true
        }
        if (nombreActural.includes(nombre) && expresion === true) {
            tabla.deleteRow(fila.rowIndex - 1)
            borrado = true
        }
    });
    return borrado
}

anadirAlumno('Juan Fdez', 'SBD');
anadirAlumno('Juan Fdez', 'SBD');

console.log(eliminarAlumnoPorNombre('Juan', true));