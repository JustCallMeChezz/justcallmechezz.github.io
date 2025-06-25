  const apiUrl = "https://api.kastg.xyz/api/ai/llama";
  const apiKey = "Kastg_SXQxa10WTVsNYmwAoL4d_free";
  const model = "llama-3.1-8b-turbo";
  const vibes = ["aesthetic", "vibing", "soft", "magical", "girlish", "wholesome"];
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  const prompt = `generate a cute, ${vibe}, meaningful quote that's only 8 to 12 words long`;
  const proxyUrl = "https://api.allorigins.win/get?url=";

  async function fetchQuote(retries = 3) {
    const box = document.getElementById("quote-box");
    const dots = document.getElementById("typing-dots");

    box.innerText = ""; 
    box.classList.remove("loaded"); 
    dots.style.display = "inline-flex"; 

    try {
      const fullUrl = `${proxyUrl}${encodeURIComponent(`${apiUrl}?key=${apiKey}&prompt=${encodeURIComponent(prompt)}&model=${model}&timestamp=${Date.now()}`)}`;
      const response = await fetch(fullUrl);
      const data = await response.json();
      const quote = JSON.parse(data.contents).result[0]?.response;

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