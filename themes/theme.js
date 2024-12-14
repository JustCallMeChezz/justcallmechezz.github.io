let clickCount = 0;

function toggleCSS() {
  const stylesheet = document.getElementById('theme-stylesheet');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const triggerElement = document.querySelector('.theme');
  
  triggerElement.classList.add('rubber-bounce');
  
  document.body.classList.add('fade-out');
  
  setTimeout(() => {
    clickCount++;

    let themeColor = "#fbc0af";

    if (clickCount % 8 === 1) {
      stylesheet.setAttribute('href', 'themes/chezzyy.css');
      themeColor = "#ffbb8a";
    } else if (clickCount % 8 === 2) {
      stylesheet.setAttribute('href', 'themes/frostyy.css');
      themeColor = "#e0f7fa";
    } else if (clickCount % 8 === 3) {
      stylesheet.setAttribute('href', 'themes/rosydream.css');
      themeColor = "#f7c6d2";
    } else if (clickCount % 8 === 4) {
      stylesheet.setAttribute('href', 'themes/neonrose.css');
      themeColor = "#ff66b2";
    } else if (clickCount % 8 === 5) {
      stylesheet.setAttribute('href', 'themes/purpurr.css');
      themeColor = "#800080";
    } else if (clickCount % 8 === 6) {
      stylesheet.setAttribute('href', 'themes/purpurrgloww.css');
      themeColor = "#8a2be2";
    } else if (clickCount % 8 === 7) {
      stylesheet.setAttribute('href', 'themes/dark.css');
      themeColor = "#333333";
    } else {
      stylesheet.setAttribute('href', 'themes/pastellyy.css');
      themeColor = "#fbc0af";
    }

    themeColorMeta.setAttribute('content', themeColor);

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
      triggerElement.classList.remove('rubber-bounce');
    }, 400);
  }, 250);
}