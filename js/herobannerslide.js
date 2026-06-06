var $slider = $('.slideshow-left .slider'),
maxItems = $('.item', $slider).length;

var $sliderRight = $('.slideshow-left').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));
var rightItems = $('.item', $sliderRight).toArray().reverse();
$('.slider', $sliderRight).html('');
for (var i = 0; i < maxItems; i++) {
$(rightItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.slick({
vertical: true,
verticalSwiping: true,
arrows: false,
infinite: false,  // important: infinite off
dots: true,
speed: 1000,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
$('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
$('.slideshow-text').slick('slickGoTo', nextSlide);
}).on("mousewheel", function (event) {
event.preventDefault();
if (event.originalEvent.deltaY < 0) {
$(this).slick('slickPrev');
} else {
$(this).slick('slickNext');
}
}).on("afterChange", function(event, slick, currentSlide){
// ✅ Last slide par scroll to next section
if(currentSlide === maxItems - 1){
setTimeout(function(){
document.querySelector("#next-section").scrollIntoView({
behavior: "smooth"
});
}, 800);
}
});

$('.slideshow-right .slider').slick({
swipe: false,
vertical: true,
arrows: false,
infinite: false,
speed: 950,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
initialSlide: maxItems - 1
});

$('.slideshow-text').slick({
swipe: false,
vertical: true,
arrows: false,
infinite: false,
speed: 900,
cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});