let clickCount = 0;

function toggleCSS() {
  const stylesheet = document.getElementById('theme-stylesheet');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const triggerElement = document.querySelector('.theme');
  const githubStatsSection = document.querySelector('.github-stats');
  
  triggerElement.classList.add('rubber-bounce');
  
  document.body.classList.add('fade-out');
  
  setTimeout(() => {
    clickCount++;

    let themeColor = "#fbc0af";
    let themeToApply = 'themes/pastellyy.css'; // default pastellyy

    if (clickCount % 8 === 1) {
      themeToApply = 'themes/chezzyy.css';
      themeColor = "#ffbb8a";
    } else if (clickCount % 8 === 2) {
      themeToApply = 'themes/frostyy.css';
      themeColor = "#e0f7fa";
    } else if (clickCount % 8 === 3) {
      themeToApply = 'themes/rosydream.css';
      themeColor = "#f7c6d2";
    } else if (clickCount % 8 === 4) {
      themeToApply = 'themes/neonrose.css';
      themeColor = "#ff66b2";
    } else if (clickCount % 8 === 5) {
      themeToApply = 'themes/purpurr.css';
      themeColor = "#800080";
    } else if (clickCount % 8 === 6) {
      themeToApply = 'themes/purpurrgloww.css';
      themeColor = "#8a2be2";
    } else if (clickCount % 8 === 7) {
      themeToApply = 'themes/dark.css';
      themeColor = "#333333";
    }

    // set the theme
    stylesheet.setAttribute('href', themeToApply);
    themeColorMeta.setAttribute('content', themeColor);

    // this thing to hide or show github stats section based on theme
    if (themeToApply !== 'themes/pastellyy.css') {
      githubStatsSection.style.display = 'none';
    } else {
      githubStatsSection.style.display = 'block';
    }

    // refresh AOS animations
    AOS.refresh();

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
      triggerElement.classList.remove('rubber-bounce');
    }, 400);
  }, 250);
}