document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("paste", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let highScore = 0;
let lives = 5;
let gameStarted = false;

const pixelRatio = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * pixelRatio;
canvas.height = window.innerHeight * pixelRatio;
canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;
ctx.scale(pixelRatio, pixelRatio);

let player = {
    x: canvas.width / pixelRatio / 2,
    y: canvas.height / pixelRatio - 272,
    width: 180,
    height: 180,
    img: new Image(),
    speed: 7,
};

let cheeses = [];
let fallingSpeed = 3;

let lastMoveTime = Date.now();
let moveCooldown = 500;
let touchMove = null;

let playerImages = {
    left: new Image(),
    right: new Image(),
    leftStop: new Image(),
    rightStop: new Image(),
};

playerImages.left.src = "lily_left.png";
playerImages.right.src = "lily_right.png";
playerImages.leftStop.src = "lily_left_stop.png";
playerImages.rightStop.src = "lily_right_stop.png";

function startGame() {
    document.getElementById("startMenu").style.display = "none";
    gameStarted = true;
    document.getElementById("backgroundMusic").play();
    player.img = playerImages.right;
    gameLoop();
}

document.getElementById("lily").addEventListener("click", () => {
    navigator.vibrate(200);
    
    let btn = document.getElementById("lily");
    btn.classList.add("cute-bouncyy");

    setTimeout(() => {
        btn.classList.remove("cute-bouncyy");
    }, 400); 
});

document.getElementById("startButton").addEventListener("click", () => {
    startGame();
});

function update() {
    if (gameStarted) {
        movePlayer();
        updateCheese();
        checkCollisions();
        render();
    }
}

function movePlayer() {
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
        player.img = playerImages.left;
        lastMoveTime = Date.now();
    }
    if (keys["ArrowRight"] && player.x < canvas.width / pixelRatio - player.width) {
        player.x += player.speed;
        player.img = playerImages.right;
        lastMoveTime = Date.now();
    }

    if (touchMove) {
        if (touchMove.x < canvas.width / pixelRatio / 2 && player.x > 0) {
            player.x -= player.speed;
            player.img = playerImages.left;
            lastMoveTime = Date.now();
        } else if (touchMove.x > canvas.width / pixelRatio / 2 && player.x < canvas.width / pixelRatio - player.width) {
            player.x += player.speed;
            player.img = playerImages.right;
            lastMoveTime = Date.now();
        }
    }

    const currentTime = Date.now();
    if (currentTime - lastMoveTime > moveCooldown) {
        player.img = player.x > canvas.width / pixelRatio / 2 ? playerImages.rightStop : playerImages.leftStop;
    }
}

canvas.addEventListener("touchstart", (e) => {
    touchMove = {
        x: e.touches[0].clientX
    };
});

canvas.addEventListener("touchmove", (e) => {
    touchMove = {
        x: e.touches[0].clientX
    };
});

function updateCheese() {
    if (Math.random() < 0.02) {
        cheeses.push({
            x: Math.random() * canvas.width / pixelRatio,
            y: 0,
            width: 45,
            height: 45,
            img: new Image(),
        });
    }

    cheeses.forEach(cheese => {
        cheese.y += fallingSpeed;
        if (cheese.y > canvas.height / pixelRatio) {
            cheeses.splice(cheeses.indexOf(cheese), 1);
            loseLife();
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        }
    });

    fallingSpeed += 0.001; // slowly increase speed
}

function checkCollisions() {
    cheeses.forEach((cheese, index) => {
        if (player.x < cheese.x + cheese.width &&
            player.x + player.width > cheese.x &&
            player.y < cheese.y + cheese.height &&
            player.y + player.height > cheese.y) {
            score++;
            let newSound = new Audio("catch.mp3");
            newSound.play();
            cheeses.splice(index, 1);
        }
    });
}

function loseLife() {
    lives--;
    document.getElementById("fallSound").play();
    if (lives <= 0) {
        gameOver();
    }
}

function gameOver() {
    document.getElementById("gameOverSound").play();
    gameStarted = false;
    if (score > highScore) {
        highScore = score;
    }
    document.getElementById("finalScore").textContent = score;
    document.getElementById("gameOverPopup").style.display = "block";
}

document.getElementById("restartButton").addEventListener("click", () => {
    document.getElementById("gameOverPopup").style.display = "none";
    resetGame();
    startGame();
});

function resetGame() {
    score = 0;
    lives = 5;
    cheeses = [];
    fallingSpeed = 3; // reset speed when lose... sad...
    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = lives;
    document.getElementById("highScore").textContent = highScore;
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);

    cheeses.forEach(cheese => {
        cheese.img.src = "cheese.png";
        ctx.drawImage(cheese.img, cheese.x, cheese.y, cheese.width, cheese.height);
    });

    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = lives;
    document.getElementById("highScore").textContent = highScore;
}

let keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function gameLoop() {
    if (gameStarted) {
        update();
        requestAnimationFrame(gameLoop);
    }
}

function updateClock() {
    const clock = document.getElementById("digitalClock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    clock.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();