// pfps.js
window.onload = function() {
    const profilePhoto = document.getElementById('pfps');
    const photoArray = [
        'pfp1.jpg',
        'pfp2.jpg',
        'pfp3.jpg',
        'pfp4.jpg',
        'pfp5.jpg',
        'pfp6.jpg'

    ];
    let photoIndex = 0;

    function changePhoto() {
        profilePhoto.classList.add('fade-out');  // Trigger fade out
        setTimeout(() => {
            photoIndex = (photoIndex + 1) % photoArray.length;
            profilePhoto.src = photoArray[photoIndex];
            profilePhoto.classList.remove('fade-out'); // Trigger fade in
        }, 1000);
    }

    setInterval(changePhoto, 5000); 
};