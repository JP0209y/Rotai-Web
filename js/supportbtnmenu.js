const supportMenuBtn = document.getElementById("supportmenuBtn");
const supportButtons = document.getElementById("supportButtons");
const weAreLive = document.querySelector(".weareLive");

// ===== Mobile toggle logic =====
function initSupportToggle() {
  if (window.innerWidth <= 768) {
    supportMenuBtn.addEventListener("click", mobileToggle);
    document.addEventListener("click", mobileOutsideClick);
    supportButtons.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  } else {
    supportButtons.classList.remove("active");
    const icon = supportMenuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");

    supportMenuBtn.removeEventListener("click", mobileToggle);
    document.removeEventListener("click", mobileOutsideClick);
  }
}

function mobileToggle(e) {
  e.stopPropagation();
  supportButtons.classList.toggle("active");

  const icon = supportMenuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
}

function mobileOutsideClick() {
  supportButtons.classList.remove("active");

  const icon = supportMenuBtn.querySelector("i");
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");
}

initSupportToggle();
window.addEventListener("resize", initSupportToggle);

// ===== We Are Live text logic =====
if (weAreLive) {
  // Initially hidden
  weAreLive.style.display = "none";

  setTimeout(() => {
    // Show text
    weAreLive.style.display = "inline-block";

    // Button becomes pill
    supportMenuBtn.style.borderRadius = "30px";
    supportMenuBtn.style.width = "140px";

    // After 10 sec hide again
    setTimeout(() => {
      weAreLive.style.display = "none";

      // Back to circle
      supportMenuBtn.style.borderRadius = "50%";
      supportMenuBtn.style.width = "45px";
    }, 5000);

  }, 5000);
}
