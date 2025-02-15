document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("mainVideo");
    const thumbnails = document.querySelectorAll(".video-thumb");
    let index = 0;

    // Criar um array com os vídeos
    const videos = Array.from(thumbnails).map(thumb => thumb.dataset.video);

    function changeVideo() {
        index = (index + 1) % videos.length; // Loop infinito pelos vídeos
        mainVideo.src = videos[index];
        mainVideo.play();
    }

    // Muda o vídeo a cada 5 segundos (5000ms)
    setInterval(changeVideo, 5000);

    // Evento de clique nas miniaturas para trocar o vídeo manualmente
    thumbnails.forEach((thumb, idx) => {
        thumb.addEventListener("click", function () {
            index = idx; // Atualiza o índice
            mainVideo.src = videos[index];
            mainVideo.play();
        });
    });
});
