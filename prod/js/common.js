$(function () {

  function sliderInit() {

    var sliders = [];

    var slider_opt = {
      wrapperClass: 'bx-custom',
      pager: false,
      auto: true,
      pause: 10000,
      nextText: "",
      prevText: "",
      responsive: false,
      infiniteLoop: true
    };
    if ($(window).width() < 992) {
       $('.bxslider').each(function (i, el) {
          sliders.push($(el).bxSlider(slider_opt))
        });
    }

    $(window).on("resize", function () {
      
      if ($(window).width() < 992 && !sliders.length) {
        
        $('.bxslider').each(function (i, el) {
          sliders.push($(el).bxSlider(slider_opt))
        });
        return;
      }

      if ($(window).width() >= 992 && sliders.length) {

        sliders.forEach(function (slider) {
          slider.destroySlider()
        });
        
        sliders = [];
        return;
      }
    });

  }
  sliderInit();


  //scrolls
  $(".js_scroll").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  $(".h-nav_link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top - $(window).height() * 0.25;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  //ordertop scroll

  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $(".ordertop").fadeIn(1000);
    } else {
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
      if ($quantityNum.val() < 5) {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    }
  })();

  //modal close
  $(".modal-close").on("click", function (event) {
    event.preventDefault();
    $(".modal").hide();
  });
  $(".modal").on("click", function (event) {
    if ($(event.target).hasClass("modal")) {
      $(this).hide();
    }
  });

  //popup-one close
  $(".popup-one_close").on("click", function (event) {
    event.preventDefault();
    $(".popup-one").hide();
  });
  //toggler 
  $(document).ready(function () {
    var toggler = document.getElementById('toggler');
    toggler.addEventListener('click', mainNavVisibleToggle);

    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('h-toggler--close');
      document.getElementById('nav').classList.toggle('h-nav--visible');
    }
  });



  function countersInit() {
    var w_city = ['Beograd', 'Valjevo', 'Vranje', 'Zaječar', 'Zrenjanin', 'Jagodina', 'Kragujevac', 'Kraljevo', 'Kruševac', 'Leskovac', 'Loznica', 'Niš', 'Novi Pazar', 'Pančevo', 'Požarevac', 'Priština', 'Smederevo', 'Sombor', 'Subotica', 'Užice', 'Čačak', 'Šabac'];
    var w_names = ['Milica', 'Angela', 'Jovan', 'Mari', 'Christina', 'Anastasia', 'Katharina', 'Aleksandra', 'Theodora', 'Sarah', 'Nevena', 'Tiiana', 'Elena', 'Ana', 'Iana', 'Sofija', 'Tamara', 'Mina', 'Nina', 'Emilia', 'Ivana', 'Nikolina', 'Natalia', 'Villov', 'Nadia', 'Najah'];
    var $counterElLeft = $(".js_counter_left");
    var $counterElHour = $(".js_counter_hour");

    var boughtInHour = 157;
    var leftOnStore = 32;
    rewriteCounters();

    function rewriteCounters() {
      $counterElLeft.text(leftOnStore);
      $counterElHour.text(boughtInHour);
    }

    function initBuying() {
      boughtInHour++;
      leftOnStore--;
      showBuyWidget();
      rewriteCounters();
      if (leftOnStore > 10) setTimeout(initBuying, randomInteger(6000, 18000));
      else if (leftOnStore > 4) setTimeout(initBuying, randomInteger(10000, 28000));
      else {
        $('.js_froze_quantity_modal').fadeIn(300);
      };
    }

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }

    function showBuyWidget() {
      $(".js_buy-widget_name").text(w_names[Math.floor(Math.random() * w_names.length)]);
      $(".js_buy-widget_city").text(w_city[Math.floor(Math.random() * w_city.length)]);

      $(".js_buy-widget").fadeIn(300).fadeOut(4000);
    }

    setTimeout(initBuying, randomInteger(6000, 10000));


  }
  countersInit()

  function modalPrinterInit() {
    var n = 1;
    $(document).mouseleave(function (e) {
      if (e.clientY < 50 && n > 0) {
        $(".js_quit_modal").show(0);
        n--;
      }
    })
  }
  modalPrinterInit();

  $(".js_coupon").on("change", function () {
    if ($(this).prop('checked')) $(".price").addClass("discounted");
    else $(".price").removeClass("discounted");

  });

  function setDates() {

    var month_names = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar']
    var startdate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);
    var enddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    $(".js_date_start").text(startdate.getDate());
    $(".js_month_start").text(month_names[startdate.getMonth()]);

    $(".js_date_end").text(enddate.getDate());
    $(".js_month_end").text(month_names[enddate.getMonth()]);

  }
  setDates();

});
