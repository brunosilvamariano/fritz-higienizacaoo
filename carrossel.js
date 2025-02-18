document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.getElementById("video-carousel");

    carousel.addEventListener("slid.bs.carousel", function () {
        let videos = document.querySelectorAll(".video-principal");
        videos.forEach(video => video.pause()); // Pausa todos
        
        let activeSlide = document.querySelector(".carousel-item.active video");
        if (activeSlide) activeSlide.play(); // Toca o vídeo do slide ativo
    });
});