$(window).on('scroll', function () {
  if ($(window).scrollTop() > $('#menu').offset().top) {
    $('.Header').addClass('is-scroll');
  } else {
    $('.Header').removeClass('is-scroll');
  }
});

// sp menu
$('.Header_menuButton').on('click', function () {
  $(this).toggleClass('is-active');
  $('.Header').toggleClass('is-show');
  return false;
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  easing: 'easeInOutCubic',
});

$(function () {
  // carousel
  if ($('.owl-carousel')) {
    $('.owl-carousel').owlCarousel({
      items: 1,
      margin: 30,
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          stagePadding: 20,
        },
        768: {
          stagePadding: 200,
        },
      },
    });
  }
});
