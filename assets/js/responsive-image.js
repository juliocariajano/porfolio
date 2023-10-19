function toggleDescripcion(numero) {
    var descripcion = document.getElementById('descripcion' + numero);
    var contenedorProyecto = document.querySelector('.contenedor-proyecto:nth-child(' + numero + ')');

    if (descripcion.style.display === 'none') {
        descripcion.style.display = 'block';
        contenedorProyecto.style.marginBottom = descripcion.offsetHeight + 'px';
    } else {
        descripcion.style.display = 'none';
        contenedorProyecto.style.marginBottom = '0';
    }
}

function cerrarDescripcion(numero) {
    var descripcion = document.getElementById('descripcion' + numero);
    var contenedorProyecto = document.querySelector('.contenedor-proyecto:nth-child(' + numero + ')');

    descripcion.style.display = 'none';
    contenedorProyecto.style.marginBottom = '0';
}
