document.addEventListener("DOMContentLoaded", function () {
  const dealBtn = document.querySelector(".deals-floating-btn");
  if (!dealBtn) return;

  // Scroll show / hide
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 200) {
        dealBtn.classList.add("show");
      } else {
        dealBtn.classList.remove("show");
      }
    },
    { passive: true }
  );

  // 🔥 Mobile behaviour
  if (window.innerWidth <= 767) {

    // Fire glow ONCE on load
    dealBtn.classList.add("fire-once");
    setTimeout(() => {
      dealBtn.classList.remove("fire-once");
    }, 1200);

    // Text → icon after 5 sec
    setTimeout(() => {
      dealBtn.classList.add("icon-only");
    }, 5000);
  }
});
