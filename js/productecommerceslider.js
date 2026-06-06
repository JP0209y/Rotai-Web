
function initThumbSlider(wrapper){

  const slider  = wrapper.querySelector(".thumbnails-card");
  const thumbs  = slider.querySelectorAll(".thumbnail-img");
  const prevBtn = wrapper.querySelector(".thumb-arrow.left");
  const nextBtn = wrapper.querySelector(".thumb-arrow.right");

  let currentIndex = 0;

  function slideTo(index){
    thumbs[currentIndex].classList.remove("active");
    currentIndex = index;
    thumbs[currentIndex].classList.add("active");

    thumbs[currentIndex].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }

  thumbs.forEach((thumb, i) => {
    thumb.onclick = () => {
      mainImage.src = thumb.src;
      slideTo(i);
    };
  });

  nextBtn.onclick = () => {
    if(currentIndex < thumbs.length - 1){
      slideTo(currentIndex + 1);
      mainImage.src = thumbs[currentIndex].src;
    }
  };

  prevBtn.onclick = () => {
    if(currentIndex > 0){
      slideTo(currentIndex - 1);
      mainImage.src = thumbs[currentIndex].src;
    }
  };
}

