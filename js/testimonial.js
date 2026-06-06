const testimonialSwiper = new Swiper('.testimonials-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,          // 3 seconds
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.testimonials-next',
    prevEl: '.testimonials-prev',
  },

  pagination: {
    el: '.testimonials-pagination',
    clickable: true,
  },

  breakpoints: {
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
});