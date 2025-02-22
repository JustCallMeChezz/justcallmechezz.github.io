let lastX = null, lastY = null, lastZ = null;
let threshold = 10;
let shakeTimeout;
let audio = document.getElementById("shakeSound");
let isVibrating = false;

window.addEventListener("devicemotion", (event) => {
    if (!event.accelerationIncludingGravity) return;

    let { x, y, z } = event.accelerationIncludingGravity;

    if (lastX !== null) {
        let deltaX = Math.abs(x - lastX);
        let deltaY = Math.abs(y - lastY);
        let deltaZ = Math.abs(z - lastZ);

        let totalShake = deltaX + deltaY + deltaZ;

        if (totalShake > threshold) {
            if (!shakeTimeout) {
                if (!isVibrating) {
                    navigator.vibrate([300, 100, 300]); 
                    isVibrating = true;
                    setTimeout(() => (isVibrating = false), 700);
                }

                if (audio.paused) {
                    audio.play();
                }

                shakeTimeout = setTimeout(() => {
                    shakeTimeout = null;
                }, 700);
            }
        }
    }

    lastX = x;
    lastY = y;
    lastZ = z;
});