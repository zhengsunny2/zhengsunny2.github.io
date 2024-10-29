let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; 
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

  