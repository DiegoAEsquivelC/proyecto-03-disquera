document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides[currentSlide].style.display = 'none';
        currentSlide = slideIndex;
        slides[currentSlide].style.display = 'block';
    }

    showSlide(currentSlide);

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Agregar botones de navegación (anterior y siguiente)
    let prevButton = document.createElement('button');
    prevButton.innerText = 'Anterior';
    prevButton.addEventListener('click', prevSlide);
    slider.appendChild(prevButton);

    let nextButton = document.createElement('button');
    nextButton.innerText = 'Siguiente';
    nextButton.addEventListener('click', nextSlide);
    slider.appendChild(nextButton);
});
