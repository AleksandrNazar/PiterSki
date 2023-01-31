window.onscroll = function headerFix() {
    const header = document.querySelector('.header');
    
    if(window.pageYOffset > 620) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};

const mobileMenu = document.querySelector('.nav-mobile');

document.addEventListener('click', navToggler);

function navToggler(event) {
    if(event.target.closest('.nav__toggle')) {
        mobileMenu.classList.toggle('active');
    } else {
        mobileMenu.classList.remove('active');
    }
};