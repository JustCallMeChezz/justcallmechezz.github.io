function cleanURL(url) {
    try {
        let urlObj = new URL(url);
        if (urlObj.hostname.includes("google.com") && urlObj.pathname.includes("/search")) {
            let query = urlObj.searchParams.get("q");
            return query ? `https://www.google.com/search?q=${encodeURIComponent(query)}` : url;
        }
        urlObj.searchParams.forEach((_, key) => {
            if (key.startsWith("utm_") || key === "fbclid" || key === "si" || key === "sourceid" || key === "ie" || key === "sei" || key.startsWith("gs_")) {
                urlObj.searchParams.delete(key);
            }
        });
        return urlObj.toString();
    } catch {
        return url;
    }
}

function generateQR() {
    let input = document.getElementById("linkInput").value.trim();
    if (!input) return;

    let cleanLink = input;
    if (input.startsWith("http://") || input.startsWith("https://")) {
        cleanLink = cleanURL(input);
    }

    let qrContainer = document.getElementById("qrContainer");
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, { text: cleanLink, width: 200, height: 200 });

    document.querySelector(".placeholder").style.display = "none";
    document.getElementById("downloadBtn").classList.add("active");
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qrContainer canvas");
    if (!qrCanvas) return;
    
    let newCanvas = document.createElement("canvas");
    let size = 1024;
    let padding = 64;
    newCanvas.width = size + 2 * padding;
    newCanvas.height = size + 2 * padding;
    
    let ctx = newCanvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
    ctx.drawImage(qrCanvas, padding, padding, size, size);

    let link = document.createElement("a");
    link.href = newCanvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}

document.getElementById("generateBtn").addEventListener("click", generateQR);
document.getElementById("downloadBtn").addEventListener("click", downloadQR);

const elementsToVibrate = ['.generate', '.download'];

elementsToVibrate.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', function() {
            if (navigator.vibrate) navigator.vibrate(200);
            this.classList.add('cute-bouncyy');
            setTimeout(() => {
                this.classList.remove('cute-bouncyy');
            }, 400);
        });
    });
});