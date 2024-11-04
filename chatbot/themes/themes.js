let clickCount = 0;

function toggleCSS() {
  const stylesheet = document.getElementById('theme-stylesheet');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    clickCount++;

    if (clickCount % 5 === 1) {
      stylesheet.setAttribute('href', '/chatbot/themes/chatbotcheese.css');
    } else if (clickCount % 5 === 2) {
      stylesheet.setAttribute('href', '/chatbot/themes/chatbotcitrus.css');
    } else if (clickCount % 5 === 3) {
      stylesheet.setAttribute('href', '/chatbot/themes/chatbotcharcoal.css');
    } else if (clickCount % 5 === 4) {
      stylesheet.setAttribute('href', '/chatbot/themes/chatbotdark.css');
    } else {
      stylesheet.setAttribute('href', '/chatbot/themes/chatbot.css');
    }

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 500);
  }, 250);
}