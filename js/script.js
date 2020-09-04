$(document).ready(function(){
  var featuresTop = $("#features").offset().top;
  checkPoint = featuresTop - 200;
  
  jQuery("#scroll-top").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, "500");
  });

  // add array data offset top block
  arrMenu = ["home", "features", "responsive", "help", "services", "testimonials"];
  arrMenuTop = [];
  nthChildMenu = [];
  for (let index = 0; index < arrMenu.length; index++) {
    const menuItem = arrMenu[index];
    var menuItemTop = $("#" + menuItem).offset().top - 56;
    arrMenuTop.push(menuItemTop);
    var nthChildMenuItem = index + 1;
    nthChildMenu.push(nthChildMenuItem);
  }
  arrMenuTop.push(Infinity);

  // scroll top
  window.onscroll = function() {scrollFunction()};

  function activeMenu(a,b) {
    if(($(this).scrollTop() > arrMenuTop[a]) && ($(this).scrollTop() < arrMenuTop[b])) {
      $('.header__menu__nav-item').removeClass('active');
      $(".header__menu__nav-item:nth-child(" + nthChildMenu[a] + ")").addClass('active');

      if(a == 3) {
        $(".section-help--right").addClass("animated");
        $(".section-help--right").css({"visibility": "visible", "animation-name": "fadeInRight"});
        setTimeout(() => {
          $(".section-help--right").removeClass("animated");
        }, 1000);
      }

      if(a == 4) {
        $(".section-services--right").addClass("animated");
        $(".section-services--right").css({"visibility": "visible", "animation-name": "fadeInUp"});
        setTimeout(() => {
          $(".section-services--right").removeClass("animated");
        }, 1000);
      }

      if(a == 5) {
        $(".section-testimonials__item").addClass("animated");
        $(".section-testimonials__item:nth-child(1)").css({"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInLeft"});
        $(".section-testimonials__item:nth-child(2)").css({"visibility": "visible", "animation-delay": "0.2s", "animation-name": "fadeInLeft"});
        $(".section-testimonials__item:nth-child(3)").css({"visibility": "visible", "animation-delay": "0.3s", "animation-name": "fadeInLeft"});
        setTimeout(() => {
          $(".section-testimonials__item").removeClass("animated");
        }, 1000);
      }
    }
  }

  function scrollFunction() {
    if ( document.body.scrollTop > checkPoint || document.documentElement.scrollTop > checkPoint ) {
      $("#scroll-top").addClass("active");
    } 
    else {
      $("#scroll-top").removeClass("active");
    }

    for (let index = 0; index < nthChildMenu.length; index++) {
      activeMenu(index, index+1);
    }
  }

  // click scroll
  nthChildMenu.forEach( function (element, index) {
    $(".header__menu__nav-item:nth-child("+ element +") a").on("click", function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: arrMenuTop[index] + 1
      }, 500);
    });
  });

  // animate load offset top block
  // animate load offset top block section help right
  console.log(arrMenuTop);


});


function tuToogleMenu(t) {
  jQuery(t).closest("header").toggleClass("active");
}
