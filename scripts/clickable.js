document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile img');
    const nameElement = document.getElementById('name');

    function addVibration(element, duration = 300) {
        element.classList.add('vibrate');
        setTimeout(() => element.classList.remove('vibrate'), duration);
    }

    function fadeInOut(element, newText, timeout = 600) {
        element.classList.add('fade-out');
        setTimeout(() => {
            element.textContent = newText;
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }, timeout);
        setTimeout(() => element.classList.remove('fade-in'), timeout * 2);
    }

    profileImg.addEventListener('click', function() {
        addVibration(this);
        if (navigator.vibrate) navigator.vibrate(200);
    });

    nameElement.addEventListener('click', function() {
        const newName = nameElement.textContent === '✮sᥣᥱᥱρყcнεzz🧀' ? '𝓛𝓲𝓵𝔂 𝓛𝓲𝔂𝓪𝓷𝓪 𖹭' : '✮sᥣᥱᥱρყcнεzz🧀';
        fadeInOut(nameElement, newName);
    });
});