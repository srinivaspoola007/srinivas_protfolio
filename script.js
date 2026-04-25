document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        keyboard: {
            enabled: true,
        },

        mousewheel: {
            invert: false,
        },

        cardsEffect: {
            perSlideOffset: 12,
            perSlideRotate: 3,
            slideShadows: true,
        },
    });
});