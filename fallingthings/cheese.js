document.addEventListener('DOMContentLoaded', function() {
const chezzFallContainer = document.querySelector('.chezz-fall-container');
const chezzSources = ['/fallingthings/cheese.png', '/fallingthings/lily_fall.png'];
const startWord = document.getElementById('startWord');

function createChezz() {
    const chezz = document.createElement('img');
    chezz.src = chezzSources[0]; 
    chezz.classList.add('chezz-fall');
    chezz.style.left = `${Math.random() * 100}vw`; 
    chezz.style.animationDuration = `${5 + Math.random() * 5}s`; 
    chezzFallContainer.appendChild(chezz);

    chezz.addEventListener('click', () => {
        chezz.classList.add('magic-transform');
        const nextIndex = (chezzSources.indexOf(chezz.src.split('/').pop()) + 1) % chezzSources.length;

        setTimeout(() => {
            chezz.src = chezzSources[nextIndex];
            chezz.classList.remove('magic-transform');
        }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-duration')) * 1000);
    });

    chezz.addEventListener('animationend', () => {
        chezz.remove();
    });
}

startWord.addEventListener('click', () => {
    startWord.classList.add('clicked'); 
    setInterval(createChezz, 500); 
});
});