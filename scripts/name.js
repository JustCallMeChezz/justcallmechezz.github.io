function irlName() {
  const nameElement = document.getElementById("irl-name");

  setInterval(() => {
    const currentName = nameElement.textContent;
    nameElement.classList.add("hidden");

    setTimeout(() => {
      nameElement.textContent = currentName === "Name: Lily Liyana | Chezz" ? "Name: Nur Lily Liyana | sleepychezz" : "Name: Lily Liyana | Chezz";
      nameElement.classList.remove("hidden");
    }, 500);
  }, 5000);
}

irlName();