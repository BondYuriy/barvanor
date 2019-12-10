$(document).ready(function() {
  /* menu */

  $('.js-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.menu-box').toggleClass('menu-open');
    $('.menu-backdrop').toggleClass('menu-backdrop-open');
  });

  /* carousel */

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2200,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
