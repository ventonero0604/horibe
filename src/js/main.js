$(window).on('scroll', function () {
  if ($(window).scrollTop() > $('#menu').offset().top) {
    $('.Header').addClass('is-scroll');
  } else {
    $('.Header').removeClass('is-scroll');
  }
});

// sp menu
$('.Header_menuButton').on('click', function () {
  menuToggleClass();
});

$('.Header_menu a').on('click', function () {
  menuToggleClass();
});

const menuToggleClass = () => {
  $('html').toggleClass('is-show');
};

var baseSettings = {
  duration: 800,
  viewFactor: 0.1,
  reset: true,
};
var slideUp = {
  baseSettings,
  distance: '30px',
  origin: 'bottom',
};
var slideInLeft = {
  baseSettings,
  distance: '50px',
  origin: 'left',
};
var slideInRight = {
  baseSettings,
  distance: '50px',
  origin: 'right',
};

// scroll reveal
ScrollReveal().reveal('.slideUp', slideUp);
ScrollReveal().reveal('.slideInLeft', slideInLeft);
ScrollReveal().reveal('.slideInRight', slideInRight);

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
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          stagePadding: 30,
          margin: 14,
        },
        768: {
          stagePadding: 200,
          margin: 30,
        },
      },
    });
  }
});
