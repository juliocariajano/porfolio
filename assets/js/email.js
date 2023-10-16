document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Recopila los datos del formulario
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('subject').value;
    var mensaje = document.getElementById('message').value;

    // Llama a EmailJS para enviar el correo
    emailjs.send('MU8z4QD5FX27JwFMQ', 'template_5uc8dbi', {
        user_name: nombre,
        user_email: email,
        // asunto: asunto,
        user_message: mensaje
    }).then(function (response) {
        console.log('Correo enviado', response);
        // Aquí puedes añadir una acción adicional después de enviar el correo
    }, function (error) {
        console.log('Error al enviar el correo', error);
        // Aquí puedes manejar el error
    });
});
