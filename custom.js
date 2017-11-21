//$(document).ready(function() {

//**********menu Toggle************
 $('#showmenu').click(function() {
                $('.menu').toggle("size");
        });

  $('.open-crawl-menu').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.nav-item__num').attr('data-after', i);
  }).slick({
    dots: false,
    vertical: true,
    infinite: true,
    speed: 250,
    prevArrow: $('.slick-prevM'),
    nextArrow: $('.slick-nextM'),
    centerMode: true,
    centerPadding: '220px',
    slidesToShow: 5,
    verticalSwiping: false
  }).bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta / 120 > 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  });

  //older code for starfeild below

  // function getRandom(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // var canvas = document.getElementById('starfield'),
  // context = canvas.getContext('2d'),
  // stars = 600,
  // colorrange = [0,60,240];
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // for (var i = 0; i < stars; i++) {
  //   var x = Math.random() * canvas.offsetWidth,
  //   y = Math.random() * canvas.offsetHeight,
  //   radius = Math.random() * 1.2,
  //   hue = colorrange[getRandom(0,colorrange.length - 1)],
  //   sat = getRandom(50,100);

  //   context.beginPath();
  //   context.arc(x, y, radius, 0, 360);
  //   context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
  //   context.fill();
  // }
//});

