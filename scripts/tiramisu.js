const muffin = "fr";
const brownie = "mwAoL4d_";
const cookie = "Ka";
const tart = "_SX";
const pie = "TVsNY";
const cupcake = "Qxa10W";
const donut = "stg";
const tiramisu = "ee";
const cheese = cookie + donut + tart + cupcake + pie + brownie + muffin + tiramisu;

const apiConfigurations = [
  {
    url: atob("aHR0cHM6Ly9hcGkua2FzdGcueHl6L2FwaS9haS9mYXN0LWxsYW1hVjMtbGFyZ2U="),
    model: atob("ZmFzdC1sbGFtYVYzLWxhcmdl"),
    requiresModel: false
  },
  {
    url: atob("aHR0cHM6Ly9hcGkua2FzdGcueHl6L2FwaS9haS9sbGFtYQ=="),
    model: atob("bGxhbWEtMy4xLThiLXR1cmJv"),
    requiresModel: true
  }
];

const corsFast = atob("aHR0cHM6Ly9jb3JzcHJveHkuaW8vPw==");
const corsFallback = atob("aHR0cHM6Ly9hcGkuYWxsb3JpZ2lucy53aW4vZ2V0P3VybD0=");

const vibes = ["aesthetic", "vibing", "soft", "magical", "girlish", "wholesome"];

function wrapFast(url) {
  return corsFast + encodeURIComponent(url);
}

function wrapFallback(url) {
  return corsFallback + encodeURIComponent(url);
}

function constructUrlApi(prompt, config, useFallback = false) {
  const params = new URLSearchParams({ prompt, key: cheese });
  if (config.requiresModel) params.append("model", config.model);
  const rawUrl = `${config.url}?${params.toString()}`;
  return useFallback ? wrapFallback(rawUrl) : wrapFast(rawUrl);
}

async function tryFetchQuote(prompt) {
  for (const config of apiConfigurations) {
    for (const useFallback of [false, true]) {
      const apiUrl = constructUrlApi(prompt, config, useFallback);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const content = useFallback ? JSON.parse(data.contents) : data;
        let response = content?.result?.[0]?.response;
        if (response && response.trim() !== "") {
          response = response.trim();
          if (response.startsWith('"') && response.endsWith('"')) {
            response = response.slice(1, -1);
          }
          return `"${response}"`;
        }
      } catch (err) {}
    }
  }
  return null;
}

async function fetchQuote() {
  const box = document.getElementById("quote-box");
  const dots = document.getElementById("typing-dots");
  box.innerText = "";
  box.classList.remove("loaded");
  dots.style.display = "inline-flex";

  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  const prompt = `generate a cute, ${vibe}, meaningful quote that's only 8 to 12 words long`;

  let quote;
  try {
    quote = await tryFetchQuote(prompt);
  } catch {
    quote = null;
  }

  dots.style.display = "none";
  if (quote) {
    box.classList.remove("loaded");
    setTimeout(() => {
      box.innerText = quote;
      box.classList.add("loaded");
    }, 50);
  } else {
    showFallbackQuotes();
  }
}

async function typeText(element, text, speed = 150) {
  return new Promise((resolve) => {
    let i = 0;
    element.innerHTML = "&nbsp;";
    element.style.transition = "none";
    element.style.maxHeight = "0px";

    requestAnimationFrame(() => {
      element.style.transition = "max-height 0.6s ease";
      element.classList.add("loaded");

      const interval = setInterval(() => {
        element.innerText = text.slice(0, i + 1);
        element.style.maxHeight = element.scrollHeight + "px";
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  });
}

async function fadeOutIn(box, text, stay = 2000) {
  await typeText(box, `"${text}"`);
  await new Promise((r) => setTimeout(r, stay));
  box.style.transition = "opacity 0.8s ease";
  box.style.opacity = 0;
  await new Promise((r) => setTimeout(r, 800));
  box.style.opacity = 1;
}

async function showFallbackQuotes() {
  const box = document.getElementById("quote-box");

  await fadeOutIn(box, "once i dreamt that we were dear to each other...");
  await fadeOutIn(box, "i woke to find that we were strangers...");
  //i got these quotes from wuwa .-.
  await typeText(
    box,
    `"memories are like old servers... abandoned... but still holding worlds you once lived in..."`
  );
}

document.addEventListener("DOMContentLoaded", () => fetchQuote());