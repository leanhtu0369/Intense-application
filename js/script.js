$(document).ready(function(){
  var featuresTop = $("#features").offset().top;
  checkPoint = featuresTop - 200;

  // scroll top
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if ( document.body.scrollTop > checkPoint || document.documentElement.scrollTop > checkPoint ) {
      $("#scroll-top").addClass("active");
    } 
    else {
      $("#scroll-top").removeClass("active");
    }
  }
  
  jQuery("#scroll-top").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, "500");
  });


  arrMenu = ["home", "features", "responsive", "help", "services", "testimonials"];
  for (let index = 0; index < arrMenu.length; index++) {
    const menuItem = arrMenu[index];
    // console.log(menuItem);

    var idmenuItem = "#" + menuItem;
    // console.log(idmenuItem);

    var menuItemTop = menuItem + "Top";
    // console.log(menuItemTop);

    var menuItemTop = $(idmenuItem).offset().top;
    // console.log(menuItemTop);

    var menuItemHeight = $(idmenuItem).height();
    // console.log(menuItemHeight);

    var  menuItemBottom = menuItemTop + menuItemHeight;
    // console.log(menuItemBottom);
    
    var nthChildMenu = index + 1;

    if( menuItemTop < $(this).scrollTop() < menuItemBottom){
      $('.header__menu__nav-item').removeClass('active');
      $(".header__menu__nav-item:nth-child(" + nthChildMenu + ")").addClass('active');
      console.log(nthChildMenu);
    }
  }


});


function tuToogleMenu(t) {
  jQuery(t).closest("header").toggleClass("active");
}

