let currentSlide = 0;
        const sliderImages = document.querySelector('.slider-images');
        const slides = document.querySelectorAll('.slider img');
        
        document.addEventListener("DOMContentLoaded", function () {
            showSlide(currentSlide);
            setInterval(() => moveSlide(1), 5000);
        });

        function showSlide(n) {
            if (n >= slides.length) {
                currentSlide = 0;
            } else if (n < 0) {
                currentSlide = slides.length - 1;
            }
            sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function moveSlide(n) {
            currentSlide += n;
            showSlide(currentSlide);
        }
        
        const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
});
document.getElementById("last-checked").textContent = formattedDate;

document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        if (link) window.open(link, '_blank');
    });
});

document.querySelectorAll('.card-img').forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      const parent = this.closest('.info-card');
      const link = parent.getAttribute('data-link');
      if (link) window.open(link, '_blank');
    });
  });

  // other parts open modal
  document.querySelectorAll('.card-info').forEach(info => {
    info.addEventListener('click', function(e) {
      e.stopPropagation();
      openModal();
    });
  });

  function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('fade-out');
    modal.style.display = 'flex';
    modal.classList.add('fade-in');
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

const buttonIds = ["joinButton", "discord", "telegram",];

buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", function() {
            let sound = document.getElementById("click");
            sound.currentTime = 0;
            sound.play();
        });
    }
});

const icon = document.getElementById("icon");
let clickCount = 0;

const hitSound = new Audio("sounds/hit.mp3");
const getOutSound = new Audio("sounds/getout.mp3");

const playSound = (sound, callback) => {
  sound.currentTime = 0;  
  sound.play().then(() => {
    if (callback) sound.onended = callback;  
  }).catch(() => {
    console.log("Autoplay blocked");
    if (callback) callback(); 
  });
};

icon.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 9) {
    playSound(getOutSound, () => {
      window.location.href = "minecraft://"; 
    });
    clickCount = 0;
  } else {
    playSound(hitSound);
  }

  icon.classList.add("hit");
  setTimeout(() => icon.classList.remove("hit"), 200);
});
        
        const elementsToVibrate = ['.invite-button', '.community', '.social-media i', '.icon'];

elementsToVibrate.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', function() {
            if (navigator.vibrate) navigator.vibrate(100);
            this.classList.add('cute-bouncyy');
            setTimeout(() => {
                this.classList.remove('cute-bouncyy');
            }, 400);
        });
    });
});

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