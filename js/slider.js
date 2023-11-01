const servicesSlider = new Swiper('.services__swiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
})

const guarantysSlider = new Swiper('.guarantys__swiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
})

const suppliersSlider = new Swiper('.suppliers__swiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
        490: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        910: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
})
