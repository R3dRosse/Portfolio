
// JavaScript para el movimiento de las imagenes en "Projects"
function cambiarImagen(imagen) {
    // Guardar la imagen grande actual
    let imgGrande = document.getElementById('img-grande');
    let tempSrc = imgGrande.src;

    // Cambiar la imagen grande por la pequeña seleccionada
    imgGrande.src = imagen.src;

    // Reemplazar la imagen pequeña seleccionada con la imagen grande anterior
    imagen.src = tempSrc;
}

// JavaScript para el movimiento entre la información en "Career"

function mostrarInformacion(empresaId) {
    // Ocultar toda la información de las empresas
    var elementos = document.querySelectorAll('.info');
    elementos.forEach(function(elemento) {
        elemento.classList.remove('active');
    });

    // Mostrar la información de la empresa seleccionada
    var elementoSeleccionado = document.getElementById(empresaId);
    elementoSeleccionado.classList.add('active');
}
