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
    slidesPerView: 4,
})
