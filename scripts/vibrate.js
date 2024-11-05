const elementsToVibrate = ['.theme', '.linked', '.games', '.social-media', '.clickable-word'];

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
