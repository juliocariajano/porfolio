document.querySelector('.user-info__buttons').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/assets/cv/cv.pdf'; // Reemplaza con la ruta de tu archivo PDF
    link.download = 'cv.pdf'; // Nombre que tendrá el archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});