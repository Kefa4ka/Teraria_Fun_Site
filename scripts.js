// Слайдер
let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = slides.querySelectorAll('img');
const totalSlides = slideImages.length;

function showSlides() {
    slideIndex++;
    if (slideIndex > totalSlides - 1) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});

setInterval(showSlides, 5000); // Автоматичне перемикання кожні 5 секунд
