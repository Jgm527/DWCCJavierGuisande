function actualizarPanelCursos() {
    const listaCursos = document.getElementById("lista-cursos");

    for (li of listaCursos.children) {
        if (li.dataset.plazas === "0") {
            li.textContent += " - COMPLETO"
        } else {
            li.setAttribute("estado-curso", `${li.dataset.plazas} plazas libres`)
        }
    }
}