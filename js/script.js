"use strict";

//fixed header
window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 620) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};


//active link
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function(links) {
    links.addEventListener('click', function() {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        })
        this.classList.add('active');
    })
});


//nav menu toggle
const mobileMenu = document.querySelector('.nav-mobile');

document.addEventListener('click', navToggler);

function navToggler(event) {
    if(event.target.closest('.nav__toggle')) {
        mobileMenu.classList.toggle('active');
    } else {
        mobileMenu.classList.remove('active');
    }
};

//Slider

const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('.team__btn--next');
const btnPrev = document.querySelector('.team__btn--prev');

sliderItems.forEach(function (slide, index) {

    if (index !== 0) slide.classList.add('hidden');

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function () {
        showNextSlide('next');
    });
});

btnNext.onclick = function () {
    showNextSlide('next');
};

btnPrev.onclick = function () {
    showNextSlide('prev');
};

function showNextSlide(direction) {

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}


//Accordion 
const accordionItems = document.querySelectorAll('.accordion__item'); 

accordionItems.forEach(function(item){
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//Slider swiper
new Swiper('.gallery-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    preloadImages: false,

    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: true,
    },

    loop: true,

    autoplay: {
        delay: 2000,
        disablrOnInteraction: true,
    },

    slidesPerView: 3,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        786: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },
    },
});





