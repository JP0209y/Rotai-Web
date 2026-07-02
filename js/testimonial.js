// Testimonials Slider
const testimonialSwiper = new Swiper(".testimonials-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
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
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },

  pagination: {
    el: ".testimonials-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


// Customer Reviews Slider
document.addEventListener("DOMContentLoaded", function () {
  const customerSlider = document.querySelector(".customer-review-slider");

  if (customerSlider) {
    const customerReviewSwiper = new Swiper(".customer-review-slider", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      speed: 700,
      watchOverflow: false,
      observer: true,
      observeParents: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },

      navigation: {
        nextEl: ".customer-review-next",
        prevEl: ".customer-review-prev",
      },

      pagination: {
        el: ".customer-review-pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    customerReviewSwiper.autoplay.start();
  }
});