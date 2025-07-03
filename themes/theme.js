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

if (clickCount % 5 === 1) {  
  themeToApply = 'themes/amethyst.css';  
  themeColor = "#ffbb8a";  
} else if (clickCount % 5 === 2) {  
  themeToApply = 'themes/cheesyy.css';  
  themeColor = "#e0f7fa";  
} else if (clickCount % 5 === 3) {  
  themeToApply = 'themes/blushh.css';  
  themeColor = "#f7c6d2";  
} else if (clickCount % 5 === 4) {  
  themeToApply = 'themes/midnight.css';  
  themeColor = "#ff66b2";  
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
};