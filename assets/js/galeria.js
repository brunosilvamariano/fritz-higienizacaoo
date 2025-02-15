document.addEventListener("DOMContentLoaded", function() {
    const mainVideo = document.getElementById("mainVideo");
    const thumbnails = document.querySelectorAll(".video-thumb");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function() {
            const newVideoSrc = this.getAttribute("data-video");
            mainVideo.querySelector("source").src = newVideoSrc;
            mainVideo.load();
            mainVideo.play();
        });
    });
});
