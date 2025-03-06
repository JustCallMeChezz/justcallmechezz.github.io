let lastX = 0, lastY = 0, lastZ = 0;
let threshold = 6;
let audio = document.getElementById("shakeSound");
let container = document.querySelector(".container");
let spinTimeout;

window.addEventListener("devicemotion", (event) => {
    let { x = 0, y = 0, z = 0 } = event.accelerationIncludingGravity || {};

    let deltaX = Math.abs(x - lastX);
    let deltaY = Math.abs(y - lastY);
    let deltaZ = Math.abs(z - lastZ);

    let totalShake = deltaX + deltaY + deltaZ;

    if (totalShake > threshold) {
        if ("vibrate" in navigator) {
            navigator.vibrate(300);
            console.log("Vibrating!");
        }

        if (audio.paused) {
            audio.play();
        }

        clearTimeout(spinTimeout); 

        if (!audio.paused) { 
            spinTimeout = setTimeout(() => {
                container.classList.add("spin");
                setTimeout(() => {
                    container.classList.remove("spin");
                }, 6000); 
            }, 3000); 
        }
    }

    lastX = x;
    lastY = y;
    lastZ = z;
});