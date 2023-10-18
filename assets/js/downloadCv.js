document.querySelector('.user-info__buttons').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = '/assets/cv/Julio_Cariajano_CV.pdf';
    link.download = 'Julio_Cariajano_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});