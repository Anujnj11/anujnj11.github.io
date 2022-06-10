let isDarkMode = false;
(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    isDarkMode = !isDarkMode;
    $('body').toggleClass('dark-mode');
    isDarkMode && $("#users-icon").attr("src", "images/icons/user-white.svg") && $('.climate').attr("src", "images/icons/sun.svg");
    !isDarkMode && $("#users-icon").attr("src", "images/icons/user.svg") && $('.climate').attr("src", "images/icons/moon.svg");
  });

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: true
  });

  $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child");
  });


  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  $('[data-toggle="tooltip"]').tooltip()

})(jQuery);
