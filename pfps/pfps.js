window.onload = function() {
    const profilePhoto = document.getElementById('pfps');
    const photoArray = [
        '/pfps/lilyliyana.png',
        '/pfps/pfp1.jpg',
        '/pfps/pfp2.jpg',
        '/pfps/pfp3.jpg',
        '/pfps/pfp4.jpg',
        '/pfps/pfp5.jpg',
        '/pfps/pfp6.jpg'

    ];
    let photoIndex = 0;

    function changePhoto() {
        setTimeout(() => {
            photoIndex = (photoIndex + 1) % photoArray.length;
            profilePhoto.src = photoArray[photoIndex];
        }, 1000);
    }

    setInterval(changePhoto, 5000); 
};