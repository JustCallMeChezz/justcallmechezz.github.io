let clickCount = 0;

function toggleCSS() {
  const stylesheet = document.getElementById('theme-stylesheet');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    clickCount++;

    if (clickCount % 5 === 1) {
      stylesheet.setAttribute('href', '/chatbot/themes/chezzyy.css');
    } else if (clickCount % 5 === 2) {
      stylesheet.setAttribute('href', '/chatbot/themes/citrus.css');
    } else if (clickCount % 5 === 3) {
      stylesheet.setAttribute('href', '/chatbot/themes/charcoal.css');
    } else if (clickCount % 5 === 4) {
      stylesheet.setAttribute('href', '/chatbot/themes/dark.css');
    } else {
      stylesheet.setAttribute('href', '/chatbot/themes/pastellyy.css');
    }

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 500);
  }, 250);
}