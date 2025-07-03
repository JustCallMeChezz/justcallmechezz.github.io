const pet = document.getElementById("pet");
const climbFrames = ["fallingthings/smol/climb1.png", "fallingthings/smol/climb2.png"];
const fallFrame = "fallingthings/smol/fall.png";
const hitFrame = "fallingthings/smol/hit.png";
const wakeFrame = "fallingthings/smol/wake.png";

const preloadImages = [climbFrames[0], climbFrames[1], fallFrame, hitFrame, wakeFrame];
let loadedCount = 0;

preloadImages.forEach(src => {
   const img = new Image();
   img.src = src;
   img.onload = () => {
      loadedCount++;
      if (loadedCount === preloadImages.length) {
         pet.style.display = "block";
         animatePet();
      }
   };
});

let y = 0;
let direction = "climb";
let climbIndex = 0;
let fallHeight = getRandomFallHeight();
let frameDelay = 0;
const frameSpeed = 30;

function getRandomFallHeight() {
   const heights = [
      window.innerHeight * 1.0,
      window.innerHeight * 0.8,
      window.innerHeight * 0.6,
      window.innerHeight * 0.4
   ];
   return heights[Math.floor(Math.random() * heights.length)];
}

function animatePet() {
   if (direction === "climb") {
      y += 1;
      frameDelay++;
      if (frameDelay >= frameSpeed) {
         climbIndex = (climbIndex + 1) % climbFrames.length;
         pet.src = climbFrames[climbIndex];
         frameDelay = 0;
      }
      pet.style.bottom = y + "px";
      pet.style.right = "-36px";

      if (y > fallHeight) {
         direction = "fall";
         pet.src = fallFrame;
         pet.style.right = "-20px";
      }
   } else if (direction === "fall") {
      y -= 5;
      pet.style.bottom = y + "px";
      pet.style.right = "-20px";

      if (y <= 0) {
         direction = "hit";
         pet.src = hitFrame;
         navigator.vibrate?.(50);
         setTimeout(() => {
            pet.src = wakeFrame;
            setTimeout(() => {
               direction = "climb";
               y = 0;
               fallHeight = getRandomFallHeight();
            }, 800);
         }, 800);
      }
   }

   requestAnimationFrame(animatePet);
}