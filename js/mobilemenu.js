 const menuBtn = document.getElementById('menuBtn');
    const megaMenuSlide = document.getElementById('megaMenuSlide');
    const productItems = document.querySelectorAll('.product-item');
    const slides = document.querySelectorAll('.carousel-slide');
    const closeBtns = document.querySelectorAll('.close-slide');

    // Open Mega Menu Slide
    menuBtn.addEventListener('click', () => {
      slides.forEach(slide => slide.classList.remove('active'));
      megaMenuSlide.classList.add('active');
    });

    // Open product slide from Mega Menu
    productItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('simple-item')) return;
        const index = parseInt(item.getAttribute('data-index')) + 1;
        slides.forEach(slide => slide.classList.remove('active'));
        document.getElementById('slide' + index).classList.add('active');
      });
    });

    // Close any slide
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.classList.remove('active');
      });
    });