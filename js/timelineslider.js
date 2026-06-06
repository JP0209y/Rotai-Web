function carousel() {
  const $carousel = $('[data-js=timeline-carousel]');

  // Initialize Slick
  $carousel.slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false, // manual control
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  let lastMove = 0; // timestamp of last slide
  const moveDelay = 500; // 500ms delay between slides

  // Custom mouse hover scroll
  $carousel.on('mousemove', function(e) {
    const now = Date.now();
    if (now - lastMove < moveDelay) return; // throttle speed

    const carouselWidth = $carousel.width();
    const mouseX = e.pageX - $carousel.offset().left; // mouse X inside carousel
    const center = carouselWidth / 2;

    if (mouseX > center) {
      $carousel.slick('slickNext');
    } else {
      $carousel.slick('slickPrev');
    }

    lastMove = now;
  });
}

carousel();
