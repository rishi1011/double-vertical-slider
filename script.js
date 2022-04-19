const sliderContainer = document.querySelector('.slider-container');
const leftSlide = sliderContainer.querySelector('.left-slide');
const rightSlide = sliderContainer.querySelector('.right-slide');
const slidesLength = document.querySelectorAll('.right-slide > div').length;

const leftBtn = document.querySelector('.btn.left-arrow');
const rightBtn = document.querySelector('.btn.right-arrow');
const upBtn = document.querySelector('.btn.up-arrow');
const downBtn = document.querySelector('.btn.down-arrow');

leftBtn.addEventListener('click', () => changeSlide('left'));
rightBtn.addEventListener('click', () => changeSlide('right'));

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));


window.addEventListener('resize', () => {
    width = window.innerWidth;
    renderContent(width);
});

let activeSlideIndex = 0;

function renderContent(width) {

    activeSlideIndex = 0;

    if (width <= 1200) {
        leftSlide.style.left = `${-(slidesLength - 1) * 100}%`;
        leftSlide.style.top = `0`;

        leftSlide.style.transform = `translateX(${activeSlideIndex * 100}%)`;
        rightSlide.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
    }
    else {
        leftSlide.style.top = `${-(slidesLength - 1) * 100}%`;
        leftSlide.style.left = `0`;

        leftSlide.style.transform = `translateY(${activeSlideIndex * 100}%)`;
        rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
    }
}

function changeSlide(direction) {
    if (direction === 'up' || direction === 'right') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesLength) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down' || direction === 'left') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    if (direction === 'up' || direction === 'down') {
        leftSlide.style.transform = `translateY(${activeSlideIndex * 100}%)`;
        rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
    } else if (direction === 'left' || direction === 'right') {
        leftSlide.style.transform = `translateX(${activeSlideIndex * 100}%)`;
        rightSlide.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
    }

}

let width = window.innerWidth;
renderContent(width);