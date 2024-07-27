document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.product-image-slider');
    sliders.forEach(slider => {
        let images = slider.querySelectorAll('img');
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000); // Chuyen hinh moi 3 giay
    });
});
