(function ($) {
    "use strict";

    // Mobile Menu
   jQuery('.main-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991",
  });


    // Header Top Bar
    $('.bar-info').on('click',function(){
      $('.bar-intro').addClass('bar-open');
    });

    $('.close-icon').on('click',function(){
      $('.bar-intro').removeClass('bar-open', 5000);
    });

    // Slick Banner Slider
    $('.slider-active').slick({
        dots: true, 
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
    });

    

    // Isotope
    $('#container').imagesLoaded( function() {
      
      var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
      })

      $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
      });

      //for portfolio menu active class
      $('.portfolio-menu button').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
      });

    });




    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Counter Up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // Slick Latest Blog Slider
    $('.blog-active').slick({
      dots: true, 
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    }); 

    // Slick Testimonial Slider
    $('.testimonial-active').slick({
      dots: true, 
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

    // Slick Brand Slider
    $('.brand-active').slick({
      dots: false, 
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
    // Testimonial item
    $('.testimonial-item-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-item-active',
      dots: false,
      prevArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true
    });

    // Nice Select
    $('select').niceSelect();

    // Wow Js
    new WOW().init();

})(jQuery);	    