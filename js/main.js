$(function () {

  $('.header a').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 1500);
  });

  $('.blog__inner').slick({
    arrows : false,
    dots : true,
  });

  $('.menu__btn').on('click', function() {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  $('.menu__link').on('click', function() {
    $('.header__top-inner').removeClass('header__top-inner--active');
  });

  window.addEventListener('scroll', function () {
    $('.header__top').toggleClass('header__top--scroll', $(this).scrollTop() > ($(window).height() - 1));
  });

  var mixer = mixitup('.gallery__images');
});