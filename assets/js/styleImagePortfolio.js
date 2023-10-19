function toggleDescripcion(numero) {
    var descripcion = document.getElementById('descripcion' + numero);
    descripcion.style.display = 'block';
}

function cerrarDescripcion(numero) {
    var descripcion = document.getElementById('descripcion' + numero);
    descripcion.style.display = 'none';
}
