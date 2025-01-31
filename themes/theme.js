let clickCount = 0;

// check if device is in dark mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// set default theme based on mode
const stylesheet = document.getElementById('theme-stylesheet');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const githubStatsSection = document.querySelector('.github-stats');

if (isDarkMode) {
  stylesheet.setAttribute('href', 'themes/purpurrgloww.css');
  themeColorMeta.setAttribute('content', '#8a2be2');
  githubStatsSection.style.display = 'none'; // hide stats in dark mode (i think its didnt work...)
  clickCount = 0; // strat from purpurrgloww
} else {
  stylesheet.setAttribute('href', 'themes/pastellyy.css');
  themeColorMeta.setAttribute('content', '#fbc0af');
  githubStatsSection.style.display = 'block'; // show stats in light mode
  clickCount = 2; // start from pastellyy
}

function toggleCSS() {
  const triggerElement = document.querySelector('.theme');
  
  triggerElement.classList.add('rubber-bounce');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    clickCount++;

    let themeColor = "#8a2be2";
    let themeToApply = 'themes/purpurrgloww.css'; // default for dark mode

    if (clickCount % 8 === 1) {
      themeToApply = 'themes/purpurr.css';
      themeColor = "#800080";
    } else if (clickCount % 8 === 2) {
      themeToApply = 'themes/pastellyy.css';
      themeColor = "#fbc0af";
    } else if (clickCount % 8 === 3) {
      themeToApply = 'themes/chezzyy.css';
      themeColor = "#ffbb8a";
    } else if (clickCount % 8 === 4) {
      themeToApply = 'themes/frostyy.css';
      themeColor = "#e0f7fa";
    } else if (clickCount % 8 === 5) {
      themeToApply = 'themes/rosydream.css';
      themeColor = "#f7c6d2";
    } else if (clickCount % 8 === 6) {
      themeToApply = 'themes/neonrose.css';
      themeColor = "#ff66b2";
    } else if (clickCount % 8 === 7) {
      themeToApply = 'themes/dark.css';
      themeColor = "#333333";
    }

    // set the theme
    stylesheet.setAttribute('href', themeToApply);
    themeColorMeta.setAttribute('content', themeColor);

    // hide or show github stats section based on theme
    if (themeToApply === 'themes/pastellyy.css') {
      githubStatsSection.style.display = 'block';
    } else {
      githubStatsSection.style.display = 'none';
    }

    // skip AOS refresh if in dark mode
    if (!isDarkMode) {
      AOS.refresh();
    }

    setTimeout(() => {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }, 200);

    setTimeout(() => {
      triggerElement.classList.remove('rubber-bounce');
    }, 400);
  }, 250);
}