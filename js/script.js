$(document).ready(function(){
  const featuresTop = $("#features").offset().top;
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
    const menuItemTop = $("#" + arrMenu[index]).offset().top - 80;
    arrMenuTop.push(menuItemTop);
    const nthChildMenuItem = index + 1;
    nthChildMenu.push(nthChildMenuItem);
  }
  arrMenuTop.push(Infinity);
  // console.log(arrMenuTop);

  // animate section help right
  function AnimateSectionHelp() {
    $(".section-help--right").addClass("animated");
    $(".section-help--right").css({"visibility": "visible", "animation-name": "fadeInRight"});
    setTimeout(() => {
      $(".section-help--right").removeClass("animated");
    }, 1000);
  }
  
  // animate section services right
  function AnimateSectionServices() {
    $(".section-services--right").addClass("animated");
    $(".section-services--right").css({"visibility": "visible", "animation-name": "fadeInUp"});
    setTimeout(() => {
      $(".section-services--right").removeClass("animated");
    }, 1000);
  }

  // animate section testimonials item
  function AnimateSectionTestimonials() {
    $(".section-testimonials__item").addClass("animated");
    $(".section-testimonials__item:nth-child(1)").css({"visibility": "visible", "animation-delay": "0.1s", "animation-name": "fadeInLeft"});
    $(".section-testimonials__item:nth-child(2)").css({"visibility": "visible", "animation-delay": "0.2s", "animation-name": "fadeInLeft"});
    $(".section-testimonials__item:nth-child(3)").css({"visibility": "visible", "animation-delay": "0.3s", "animation-name": "fadeInLeft"});
    setTimeout(() => {
      $(".section-testimonials__item").removeClass("animated");
    }, 1000);
  }

  const halfSizeWindowHeight = (window.innerHeight) / 3 * 2;
  // load animate pageY Offset
  if((arrMenuTop[3] - halfSizeWindowHeight) < window.pageYOffset && window.pageYOffset < arrMenuTop[4]) {
    AnimateSectionHelp();
  }

  if( (arrMenuTop[4] - halfSizeWindowHeight) < window.pageYOffset && window.pageYOffset < arrMenuTop[5] ) {
    AnimateSectionServices();
  }

  if( (arrMenuTop[5] - halfSizeWindowHeight) < window.pageYOffset && window.pageYOffset < arrMenuTop[6] ) {
    AnimateSectionTestimonials();
  }


  // scroll top
  window.onscroll = function() {scrollFunction()};

  function activeMenu(a,b) {
    if(($(this).scrollTop() >= arrMenuTop[a]) && ($(this).scrollTop() < arrMenuTop[b])) {
      $('.header__menu__nav-item').removeClass('active');
      $(".header__menu__nav-item:nth-child(" + nthChildMenu[a] + ")").addClass('active');
    }
  }

  function scrollFunction() {
    if ( $(this).scrollTop() > checkPoint ) {
      $("#scroll-top").addClass("active");
    } 
    else {
      $("#scroll-top").removeClass("active");
    }

    for (let index = 0; index < nthChildMenu.length; index++) {
      activeMenu(index, index+1);
    }

    // scroll animate
    if(($(this).scrollTop() > (arrMenuTop[3] - halfSizeWindowHeight)) && ($(this).scrollTop() < arrMenuTop[4])) {
      AnimateSectionHelp();
    }

    if(($(this).scrollTop() > (arrMenuTop[4] - halfSizeWindowHeight)) && ($(this).scrollTop() < arrMenuTop[5])) {
      AnimateSectionServices();
    }

    if(($(this).scrollTop() > (arrMenuTop[5] - halfSizeWindowHeight)) && ($(this).scrollTop() < arrMenuTop[6])) {
      AnimateSectionTestimonials();
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

});



function tuToogleMenu(t) {
  jQuery(t).closest("header").toggleClass("active");
}
