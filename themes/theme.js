let clickCount = 0;

function toggleCSS() {
  const stylesheet = document.getElementById('theme-stylesheet');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    clickCount++;

    if (clickCount % 3 === 1) {
      stylesheet.setAttribute('href', 'themes/stylecheese.css');
    } else if (clickCount % 3 === 2) {
      stylesheet.setAttribute('href', 'themes/styledark.css');
    } else {
      stylesheet.setAttribute('href', 'themes/style.css');
    }

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 500);
  }, 250);
}