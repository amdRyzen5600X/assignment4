window.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("headMENUtime");

    element.addEventListener("click", function() {
        console.log("Click event occurred!");

        //audio.play();
        document.getElementById("audioWARN01").play();
    });

    element.addEventListener("mouseover", function() {
        console.log("Mouseover event occurred!");
    });
});
