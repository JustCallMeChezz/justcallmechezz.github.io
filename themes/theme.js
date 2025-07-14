let clickCount = 0;

function toggleCSS() {
const stylesheet = document.getElementById('theme-stylesheet');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const triggerElement = document.querySelector('.theme');
const githubStatsSection = document.querySelector('.sliderr');

triggerElement.classList.add('rubber-bounce');

document.body.classList.add('fade-out');

setTimeout(() => {
clickCount++;

let themeColor = "#fbc0af";  
let themeToApply = 'themes/pastellyy.css'; // default pastellyy  

if (clickCount % 5 === 1) {  
  themeToApply = 'themes/amethyst.css';  
  themeColor = "#d8b0e0";  
} else if (clickCount % 5 === 2) {  
  themeToApply = 'themes/cheesyy.css';  
  themeColor = "#ffbb8a";  
} else if (clickCount % 5 === 3) {  
  themeToApply = 'themes/blushh.css';  
  themeColor = "#f9c6d1";  
} else if (clickCount % 5 === 4) {  
  themeToApply = 'themes/midnight.css';  
  themeColor = "#3c3c3c";  
} 

stylesheet.setAttribute('href', themeToApply);  
themeColorMeta.setAttribute('content', themeColor);  

if (themeToApply !== 'themes/pastellyy.css') {  
  githubStatsSection.style.display = 'none';  
} else {  
  githubStatsSection.style.display = 'block';  
}  

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