document.addEventListener('DOMContentLoaded', function () {

new Swiper('.mySwiper', {
effect: 'cards',
grabCursor: true,
loop: true,

// IMPORTANT FIX (links work)
preventClicks: false,
preventClicksPropagation: false,

keyboard: true,
mousewheel: true,

cardsEffect: {
perSlideOffset: 10,
perSlideRotate: 2,
slideShadows: true
}

});

});
