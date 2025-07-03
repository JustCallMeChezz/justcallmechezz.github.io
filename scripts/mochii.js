const elementsToVibrate = ['.profile img', '.theme', '.projects','.ai', '.uhhhh','.social-media', '.clickable-word'];

  elementsToVibrate.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', function() {
        if (navigator.vibrate) {
          navigator.vibrate(200);
        }
      });
    }
  });