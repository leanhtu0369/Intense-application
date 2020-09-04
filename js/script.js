$(document).ready(function(){
  var featuresTop = $("#features").offset().top;
  checkPoint = featuresTop - 200;
  
  jQuery("#scroll-top").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, "500");
  });


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
    if(($(this).scrollTop() > arrMenuTop[a]) && $(this).scrollTop() < arrMenuTop[b] ) {
      $('.header__menu__nav-item').removeClass('active');
      $(".header__menu__nav-item:nth-child(" + nthChildMenu[a] + ")").addClass('active');
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

  nthChildMenu.forEach( function (element, index) {
    $(".header__menu__nav-item:nth-child("+ element +") a").on("click", function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: arrMenuTop[index] 
      }, 500);
    });
  });
});


function tuToogleMenu(t) {
  jQuery(t).closest("header").toggleClass("active");
}
