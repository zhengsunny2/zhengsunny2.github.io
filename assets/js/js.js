let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 如果已经是最后一张图片，回到第一张
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // 如果已经是第一张图片，跳到最后一张
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100; // 根据当前索引计算偏移量
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
