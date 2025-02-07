function irlName() {
  const nameElement = document.getElementById("irl-name");

  setInterval(() => {
    const currentName = nameElement.textContent;
    nameElement.classList.add("hidden");

    setTimeout(() => {
      nameElement.textContent = currentName === "Lily Liyana | Chezz" ? "Nur Lily Liyana | sleepychezz" : "Lily Liyana | Chezz";
      nameElement.classList.remove("hidden");
    }, 500);
  }, 5000);
}

irlName();