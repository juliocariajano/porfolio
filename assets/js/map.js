document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {

        document.querySelector("#load-iframe-map").innerHTML = ` <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.72190881706024!2d-79.18637677756404!3d-0.26590771509440886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d547c8d18b76dd%3A0xe757d98f34378d4e!2sDe%20Los%20Incas%2C%20Santo%20Domingo!5e0!3m2!1ses-419!2sec!4v1697118338250!5m2!1ses-419!2sec"
        width="400" height="300" style="border:0;"></iframe>`;
    }, 10)

})