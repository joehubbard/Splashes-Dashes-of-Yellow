$( document ).ready(function() {

    $('.slider').slick({
      arrows: false,
      fade: true,
      dots: false,
      speed: 2500,
      autoplay: true,
      autoplaySpeed: 5000
    });

    $('.mob-nav-icon').click(function(){
      $('.mob-nav').slideToggle();
    })
});
