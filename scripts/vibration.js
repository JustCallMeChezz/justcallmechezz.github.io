function addVibration(element, duration = 300) {
    element.classList.add('vibration');
    setTimeout(() => element.classList.remove('vibration'), duration);
    if (navigator.vibration) navigator.vibration(duration);
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile img');
    const socialMedia = document.querySelector('.social-media');

    profileImg.addEventListener('click', function() {
        addVibration(this);
    });

    socialMedia.addEventListener('click', function() {
        addVibration(this);
    });
});