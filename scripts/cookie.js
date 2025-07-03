document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("paste", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());

function fadeInOut(element, newText, timeout = 600) {
    element.classList.add('fade-out');
    setTimeout(() => {
        element.textContent = newText;
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    }, timeout);
    setTimeout(() => element.classList.remove('fade-in'), timeout * 2);
}

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');

    nameElement.addEventListener('click', function() {
        const newName = nameElement.textContent === '✮sᥣᥱᥱρყcнεzz🧀' ? '𝓛𝓲𝓵𝔂 𝓛𝓲𝔂𝓪𝓷𝓪 𖹭' : '✮sᥣᥱᥱρყcнεzz🧀';
        fadeInOut(nameElement, newName);
    });
});