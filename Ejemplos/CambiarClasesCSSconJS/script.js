function actualizarPanelCursos() {
    const listaCursos = document.getElementById("lista-cursos");

    for (li of listaCursos.children) {
        if (li.dataset.plazas === "0") {
            li.style.color = "red"
            li.style.fontWeight = "bold"
            li.style.textDecoration = "line-through"
        } else {
            li.setAttribute("estado-curso", `${li.dataset.plazas} plazas libres`)
        }
    }
}