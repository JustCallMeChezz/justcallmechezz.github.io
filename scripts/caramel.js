const lyliumBtn = document.getElementById("lylium-btn");
  const lyliumModal = document.getElementById("lylium-modal");

  lyliumBtn.onclick = () => {
    lyliumModal.classList.add("show");
  };

  window.onclick = (e) => {
    if (e.target === lyliumModal) {
      lyliumModal.classList.remove("show");
    }
  };
  
  function openLyliumModal() {
  const modal = document.getElementById('lylium-modal');
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
}

function closeLyliumModal() {
  const modal = document.getElementById('lylium-modal');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
}