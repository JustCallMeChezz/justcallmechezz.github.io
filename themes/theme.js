let clickCount = 0;

function toggleCSS() {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const triggerElement = document.querySelector('.theme');
  const githubStatsSection = document.querySelector('.sliderr');

  triggerElement.classList.add('rubber-bounce');
  document.body.classList.add('fade-out');

  setTimeout(() => {
    clickCount++;

    let themeVars = {};
    let themeColor = "#fbc0af";

    if (clickCount % 5 === 1) {
      themeVars = {
        '--bg-main': '#f9f6fb',
        '--title': '#6e4a82',
        '--text': '#4f3a60',
        '--underline': '#d8b0e0',
        '--blush': '#e6d1f1',
        '--soft-blush': '#f3e8fa',
        '--rose-beige': '#bfa2cc',
        '--border': 'rgba(236, 224, 245, 0.5)',
        '--bg-grad1': 'rgba(236, 224, 245, 0.28)',
        '--bg-grad2': 'rgba(248, 245, 250, 0.28)',
        '--shadows': 'rgba(160, 140, 175, 0.08)'
      };
      themeColor = "#d8b0e0";
    } else if (clickCount % 5 === 2) {
      themeVars = {
        '--bg-main': '#fff7f0',
        '--title': '#b8743d',
        '--text': '#7a5432',
        '--underline': '#ffbb8a',
        '--blush': '#ffd4b3',
        '--soft-blush': '#ffe6d4',
        '--rose-beige': '#e0b79d',
        '--border': 'rgba(255, 236, 223, 0.5)',
        '--bg-grad1': 'rgba(255, 235, 220, 0.28)',
        '--bg-grad2': 'rgba(255, 245, 230, 0.28)',
        '--shadows': 'rgba(200, 160, 130, 0.08)'
      };
      themeColor = "#ffbb8a";
    } else if (clickCount % 5 === 3) {
      themeVars = {
        '--bg-main': '#fff0f2',
        '--title': '#c46a7a',
        '--text': '#84485a',
        '--underline': '#fbb1c1',
        '--blush': '#fca4b7',
        '--soft-blush': '#ffd3dc',
        '--rose-beige': '#db8fa3',
        '--border': 'rgba(255, 192, 203, 0.6)',
        '--bg-grad1': 'rgba(255, 192, 203, 0.28)',
        '--bg-grad2': 'rgba(255, 240, 244, 0.28)',
        '--shadows': 'rgba(220, 140, 160, 0.08)'
      };
      themeColor = "#f9c6d1";
    } else if (clickCount % 5 === 4) {
      themeVars = {
        '--bg-main': '#1e1e1e',
        '--title': '#dcdcdc',
        '--text': '#bfbfbf',
        '--underline': '#5c5c5c',
        '--blush': '#3a3a3a',
        '--soft-blush': '#2e2e2e',
        '--rose-beige': '#4a4a4a',
        '--border': 'rgba(255, 255, 255, 0.1)',
        '--bg-grad1': 'rgba(20, 20, 20, 0.8)',
        '--bg-grad2': 'rgba(10, 10, 10, 0.8)',
        '--shadows': 'rgba(0, 0, 0, 0.3)'
      };
      themeColor = "#3c3c3c";
    } else {
      themeVars = {
        '--bg-main': '#fdf3f2',
        '--title': '#b37c6e',
        '--text': '#875f54',
        '--underline': '#f8c2b2',
        '--blush': '#facfc8',
        '--soft-blush': '#fcdfda',
        '--rose-beige': '#dfb3aa',
        '--border': 'rgba(255, 228, 222, 0.5)',
        '--bg-grad1': 'rgba(255, 228, 222, 0.28)',
        '--bg-grad2': 'rgba(255, 248, 245, 0.28)',
        '--shadows': 'rgba(210, 175, 165, 0.08)'
      };
      themeColor = "#fbc0af";
    }

    for (let key in themeVars) {
      document.documentElement.style.setProperty(key, themeVars[key]);
    }

    themeColorMeta.setAttribute('content', themeColor);
    githubStatsSection.style.display = (clickCount % 5 === 0) ? 'block' : 'none';

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