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

    slidesPerView: 2.5,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2.2,
        },

        992: {
            slidesPerView: 2.5,
        },
    },
});







