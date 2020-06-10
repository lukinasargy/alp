$(function () {

    function sliderInit() {
        var slider_active = false;
        var slider = {};
        if ($(window).width() < 992) {
            slider = $('.bxslider').bxSlider({
                wrapperClass: 'bx-custom',
                pager: false,
                auto:true,
                // nextSelector: ".third-control--next",
                // prevSelector: ".third-control--prev",
                nextText:"",
                prevText:"",
                responsive: false
            });
            slider_active = true;
        }

        $(window).on("resize", function () {
            if ($(window).width() < 992 && slider_active == false) {
                slider = $('.bxslider').bxSlider({
                    wrapperClass: 'bx-custom',
                    pager: false,
                    auto:true,
                    responsive: false

                });
                slider_active = true;
                return;
            }

            if ($(window).width() >= 992 && slider_active == true) {

                slider.destroySlider();
                slider_active = false;
                return;
            }
        });
        // $(".third-control--prev").on("click", function () {
        //     slider.goToPrevSlide();
        // });
        // $(".third-control--next").on("click", function () {
        //     slider.goToNextSlide();
        // });
    }
    sliderInit();


    //scrolls
    $(".first-btn, .popup-one_sale").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".h-nav_link").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top - $(window).height()*0.25;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //ordertop scroll

    $(window).scroll(function() {
        if ($(window).scrollTop()> 800) {
            $(".ordertop").fadeIn(1000);
        }
        else {
            $(".ordertop").fadeOut(1000);
        }
    });
    //ordertop buttons

    (function quantityProducts() {
    var $quantityArrowMinus = $(".ordertop-minus");
    var $quantityArrowPlus = $(".ordertop-plus");
    var $quantityNum = $(".ordertop-number");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
    })();

    //modal close
    $(".modal-close").on("click", function (event) {
        event.preventDefault();
        $(".modal").hide();
    });
    $(".modal").on("click",function(event){
      if($(event.target).hasClass("modal")) {
         $(this).hide();
      }
    });

    //popup-one close
    $(".popup-one_close").on("click", function (event) {
        event.preventDefault();
        $(".popup-one").hide();
    });
    //toggler 
    $(document).ready(function() {
    var toggler = document.getElementById('toggler');
    toggler.addEventListener('click', mainNavVisibleToggle);
    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('h-toggler--close');
      document.getElementById('nav').classList.toggle('h-nav--visible');
    }
    });


});
