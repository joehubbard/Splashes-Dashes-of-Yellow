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
      $('.mob-nav').slideToggle(200);
      $(this).toggleClass('active');
    })

    $(window).resize(function(){
        if($(window).width() > 992) {
            $('.mob-nav').hide();
            $('.mob-nav-icon').removeClass('active');
        }
    });
});
