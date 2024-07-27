document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-item');
    let index = 0;

    function showSlide(n) {
        index = (n + slides.length) % slides.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        showSlide(index + 1);
    }, 5000); // Chuy?n slide m?i 5 giây
});
