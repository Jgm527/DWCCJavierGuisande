const formulario = document.getElementById("formulario");

const examen = document.getElementById("examen");
const practica = document.getElementById("practica");

const resultado = document.getElementById("resultado");
const aviso = document.getElementById("aviso");

const notaMinima = document.getElementById("notaMinima");

const historial = document.getElementById("historial");
const borrarHistorial = document.getElementById("borrarHistorial");


// --------------------------------------------------
// VALIDACIÓN
// --------------------------------------------------

function validarCampo(campo) {
    const valor = campo.value.trim();

    if (valor === "") {
        campo.classList.add("error");
        return false;
    }

    const numero = Number(valor);

    if (numero < 0 || numero > 10 || Number.isNaN(numero)) {
        campo.classList.add("error");
        return false;
    }

    campo.classList.remove("error");
    return true;
}


// --------------------------------------------------
// CALIFICACIÓN
// --------------------------------------------------

function obtenerCalificacion(nota) {
    if (nota < 5) {
        return "Insuficiente";
    } else if (nota < 6) {
        return "Suficiente";
    } else if (nota < 7) {
        return "Bien";
    } else if (nota < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}


// --------------------------------------------------
// NOTA MÍNIMA DEL EXAMEN
// --------------------------------------------------

function calcularNotaMinima(practicaNota) {
    /*
        examen * 0.7 + practica * 0.3 >= 5

        examen >= (5 - practica * 0.3) / 0.7
    */

    const minima = (5 - practicaNota * 0.3) / 0.7;

    return Math.max(0, minima);
}


// --------------------------------------------------
// CALCULAR
// --------------------------------------------------

function calcular() {
    const examenValido = validarCampo(examen);
    const practicaValida = validarCampo(practica);

    if (!examenValido || !practicaValida) {
        aviso.textContent = "Introduce notas válidas entre 0 y 10.";
        resultado.textContent = "";
        resultado.className = "";
        notaMinima.textContent = "";
        return;
    }

    aviso.textContent = "";

    const notaExamen = Number(examen.value);
    const notaPractica = Number(practica.value);

    const notaFinal =
        notaExamen * 0.7 +
        notaPractica * 0.3;

    const calificacion = obtenerCalificacion(notaFinal);

    const estado = notaFinal >= 5
        ? "Aprobado"
        : "Suspenso";

    resultado.textContent =
        `${notaFinal.toFixed(2)} — ${estado} (${calificacion})`;

    resultado.className =
        notaFinal >= 5
            ? "aprobado"
            : "suspenso";

    // Nota mínima necesaria en el examen
    const minima = calcularNotaMinima(notaPractica);

    if (minima <= 10) {
        notaMinima.textContent =
            `Con un ${notaPractica.toFixed(2)} en la práctica, ` +
            `necesitas al menos un ${minima.toFixed(2)} en el examen para aprobar.`;
    } else {
        notaMinima.textContent =
            "Con esta nota de práctica no es posible aprobar únicamente con el examen.";
    }

    // Guardar historial
    guardarHistorial({
        examen: notaExamen,
        practica: notaPractica,
        final: notaFinal,
        estado: estado,
        calificacion: calificacion
    });

    mostrarHistorial();
}


// --------------------------------------------------
// FORMULARIO
// --------------------------------------------------

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    calcular();
});


// --------------------------------------------------
// CÁLCULO EN VIVO
// --------------------------------------------------

examen.addEventListener("input", calcular);
practica.addEventListener("input", calcular);


// --------------------------------------------------
// HISTORIAL
// --------------------------------------------------

function obtenerHistorial() {
    const datos = localStorage.getItem("historialNotas");

    if (datos === null) {
        return [];
    }

    return JSON.parse(datos);
}


function guardarHistorial(calculo) {
    const datos = obtenerHistorial();

    datos.unshift(calculo);

    // Guardamos solamente los últimos 10
    if (datos.length > 10) {
        datos.pop();
    }

    localStorage.setItem(
        "historialNotas",
        JSON.stringify(datos)
    );
}


function mostrarHistorial() {
    const datos = obtenerHistorial();

    historial.innerHTML = "";

    datos.forEach(function (calculo) {
        const elemento = document.createElement("li");

        elemento.textContent =
            `Examen: ${calculo.examen.toFixed(2)} | ` +
            `Práctica: ${calculo.practica.toFixed(2)} | ` +
            `Final: ${calculo.final.toFixed(2)} | ` +
            `${calculo.estado} (${calculo.calificacion})`;

        historial.appendChild(elemento);
    });
}


// --------------------------------------------------
// BORRAR HISTORIAL
// --------------------------------------------------

borrarHistorial.addEventListener("click", function () {
    localStorage.removeItem("historialNotas");

    mostrarHistorial();
});


// Mostrar historial al cargar la página
mostrarHistorial();