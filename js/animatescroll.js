if (window.innerWidth > 768) {
  const boxes = document.querySelectorAll(
    ".fade-in, .slide-left, .slide-right, .zoom-in, .zoom-out, .flip-up, .flip-down, .flip-left, .flip-right, .fade-up, .fade-down, .rotate, .skew, .blur, .bounce"
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-section");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  boxes.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.01}s`;
    observer.observe(el);
  });
}
