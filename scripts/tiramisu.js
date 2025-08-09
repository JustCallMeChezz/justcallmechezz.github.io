const muffin = "fr";
const brownie = "mwAoL4d_";
const cookie = "Ka";
const tart = "_SX";
const pie = "TVsNY";
const cupcake = "Qxa10W";
const donut = "stg";
const tiramisu = "ee";

const cheese = cookie + donut + tart + cupcake + pie + brownie + muffin + tiramisu;

const apiUrl = atob("aHR0cHM6Ly9hcGkua2FzdGcueHl6L2FwaS9haS9sbGFtYQ==");
const model = atob("bGxhbWEtMy4xLThiLXR1cmJv");
const vibes = ["aesthetic", "vibing", "soft", "magical", "girlish", "wholesome"];

function getRandomVibe() {
  return vibes[Math.floor(Math.random() * vibes.length)];
}

async function fetchQuote(retries = 3) {
  const box = document.getElementById("quote-box");
  const dots = document.getElementById("typing-dots");

  box.innerText = "";
  box.classList.remove("loaded");
  dots.style.display = "inline-flex";

  const vibe = getRandomVibe();
  const prompt = `generate a cute, ${vibe}, meaningful quote that's only 8 to 12 words long`;

  try {
    const proxyUrl = atob("aHR0cHM6Ly9jb3JzcHJveHkuaW8vPw==");
    const fullUrl = `${proxyUrl}${encodeURIComponent(`${apiUrl}?key=${cheese}&prompt=${encodeURIComponent(prompt)}&model=${model}&timestamp=${Date.now()}`)}`;

    const response = await fetch(fullUrl);
    const data = await response.json();
    const quote = data.result?.[0]?.response;

    if (quote && quote.trim() !== "") {
      setTimeout(() => {
        box.innerText = quote;
        dots.style.display = "none";
        box.classList.add("loaded");
      }, 300);
    } else throw new Error("Empty quote");
  } catch (error) {
    if (retries > 0) {
      setTimeout(() => fetchQuote(retries - 1), 5000);
    } else {
      box.innerText = `"Some people matter more than they ever know, like stars that dont realize how bright they are in someone else night."`;
      dots.style.display = "none";
      box.classList.add("loaded");
      console.error(error);
    }
  }
}

document.addEventListener("DOMContentLoaded", fetchQuote);