document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("hero-video");
    video.play().catch(error => console.log("Autoplay bloqueado", error));
});