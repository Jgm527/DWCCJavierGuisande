function evaluarAcceso(usuario) {
    if (usuario) {
        if (usuario.activo) {
            if (usuario.edad >= 18) {
                return "acceso permitido";
            } else {
                return "menor de edad";
            }
        } else {
            return "cuenta inactiva";
        }
    } else {
        return "usuario no existe";
    }
}

console.log(evaluarAcceso({ activo: true, edad: 16 }));
