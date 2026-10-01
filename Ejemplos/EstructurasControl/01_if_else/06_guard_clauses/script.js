function evaluarAcceso(usuario) {
    if (!usuario) return "usuario no existe";
    if (!usuario.activo) return "cuenta inactiva";
    if (usuario.edad < 18) return "menor de edad";
    return "acceso permitido";
}

console.log(evaluarAcceso({ activo: true, edad: 16 }));
