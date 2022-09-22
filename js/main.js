$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
    nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
});

const menu = document.querySelector('.navigate');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav__link');

function toggleMenu() {
    menu.classList.toggle('navigate_active');
    burger.classList.toggle('burger_active');
}

burger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => {
    el.addEventListener('click', toggleMenu);
})

const arrowUp = document.querySelector('.up');

function scrollUp() {
    if (window.pageYOffset > 500) {
        arrowUp.style.display = 'flex';
    } else {
        arrowUp.style.display = 'none';
    }
}

window.addEventListener('scroll', scrollUp);