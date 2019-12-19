$(document).ready(function() {
  /* menu */

  $('.js-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-box').toggleClass('menu-open');
    $('.menu-backdrop').toggleClass('menu-backdrop-open');
  });

  /* carousel */

  $('.home-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.product-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['❮', '❯'],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

const swup = new Swup();
