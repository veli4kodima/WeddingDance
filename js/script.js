new Swiper ('.services__slider', {
    spaceBetween: 16,
    breakpoints: {
        769: {
            slidesPerView: 3,
            touchRatio: 0,
            pagination: {
                el: '',
                type: '',
            },
        },
        460: {
            slidesPerView: 2.1,
            touchRatio: 1,
            pagination: {
                el: '.services__slider .swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
        },
        320: {
			slidesPerView: 1.2,
			touchRatio: 1,
            pagination: {
                el: '.services__slider .swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
        }
    }
});

new Swiper ('.coaches__slider', {
    touchRatio: 1,
    spaceBetween: 16,
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            pagination: {
                el: '.coaches__slider .swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                            ' of ' +
                            '<span class="' + totalClass + '"></span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        },
        475: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            pagination: {
                el: '.coaches__slider .swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
            navigation: {
                nextEl: '',
                prevEl: ''
            },
        },
        320: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			pagination: {
                el: '.coaches__slider .swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
            navigation: {
                nextEl: '',
                prevEl: ''
            },
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let burgerButton = document.querySelector('.burger__menu'),
        mobileMenu = document.querySelector('nav.nav'),
        mobileMenuLinks = document.querySelectorAll('.nav__item'),
        body = document.querySelector('body');


    let addClass = function(className) {
        burgerButton.classList.toggle(className);
		mobileMenu.classList.toggle(className);
		body.classList.toggle(className);
    }

    burgerButton.addEventListener('click', () => {
        addClass('open');
    });

    mobileMenuLinks.forEach((item) => {
        item.addEventListener('click', () => {
            addClass('open')
        });
    });

});