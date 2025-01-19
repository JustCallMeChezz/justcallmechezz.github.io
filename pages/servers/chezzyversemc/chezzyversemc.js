let currentSlide = 0;
        const sliderImages = document.querySelector('.slider-images');
        const slides = document.querySelectorAll('.slider img');
        
        document.addEventListener("DOMContentLoaded", function () {
            showSlide(currentSlide);
            setInterval(() => moveSlide(1), 5000);
        });

        function showSlide(n) {
            if (n >= slides.length) {
                currentSlide = 0;
            } else if (n < 0) {
                currentSlide = slides.length - 1;
            }
            sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function moveSlide(n) {
            currentSlide += n;
            showSlide(currentSlide);
        }