(function ($, Drupal, drupalSettings, once) {
  
    Drupal.behaviors.swiper = {
      attach() {
        $(window).on("load", function () {
          $('.swiper-slide-thumbs .layout-sixtysix-thirtythree .layout__region--first');
          var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });
        });
      }
    };
   
  })(jQuery, Drupal, drupalSettings, once);