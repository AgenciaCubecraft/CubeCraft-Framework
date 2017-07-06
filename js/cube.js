/* Functions on Load */
  window.onload = function() {
    relogo();
    reSideNav()
  };
 
/* Functions on Scroll */
  $(window).on('scroll',function(){
    renav2();
  });

/* Functions on Click */
  $(document).ready(function(){

    /* Effect for NavTop Model 3 */
      $(".logo-nav3").click(function(){
        if ($('nav').hasClass('change-navtop-model3')){
          $('.change-navtop-model3').removeClass('change-navtop-model3')
          $('.navtop-model3 ul li').removeClass('change-li3')
          $('.navtop-model3 ul li a').removeClass('change-font3')
          $('.logo-nav3').removeClass('change-logo3')
          $('.navtop-model3 ul li a').removeClass('change-op3')
        } else {
            $('.navtop-model3').addClass('change-navtop-model3');
            $('.navtop-model3 ul li').addClass('change-li3');
            $('.navtop-model3 ul li a').addClass('change-font3')
            $('.navtop-model3 ul li a').addClass('change-op3')
            $('.logo-nav3').addClass('change-logo3')
          } 
        });

    /* Effect for SideNav Model 2 */
      $("#sidelogo").click(function(){
        if ($('nav').hasClass('change-sidenav2')){
          $('.change-sidenav2').removeClass('change-sidenav2')
          $('.sidenav-model2 ul li').removeClass('change-side-li2')
          $('.sidenav-model2 ul li a').removeClass('change-side-font2')
          $('#sidelogo').removeClass('change-sidelogo')
        } else {
            $('.sidenav-model2').addClass('change-sidenav2')
            $('.sidenav-model2 ul li').addClass('change-side-li2')
            $('.sidenav-model2 ul li a').addClass('change-side-font2')
            if ($('nav').hasClass('sidenav-model2')) {
              $('#sidelogo').addClass('change-sidelogo')
            }
          } 
        });

    /* Effect for SideNav Model 3 */
      $("#sidelogo").click(function(){
        if ($('nav').hasClass('change-sidenav3')){
          $('.change-sidenav3').removeClass('change-sidenav3')
          $('.sidenav-model3 ul li').removeClass('change-side-li3')
          $('.sidenav-model3 ul li a').removeClass('change-side-font3')
          $('#sidelogo').removeClass('change-sidelogo')
        } else {
            $('.sidenav-model3').addClass('change-sidenav3')
            $('.sidenav-model3 ul li').addClass('change-side-li3')
            $('.sidenav-model3 ul li a').addClass('change-side-font3')
            if ($('nav').hasClass('sidenav-model3')) {
              $('#sidelogo').addClass('change-sidelogo')
            }
          } 
        });

    /* Effect for Right-SideNav Model 2 */
      $(".sidelogo-r").click(function(){
        if ($('nav').hasClass('change-sidenav-r2')){
          $('.change-sidenav-r2').removeClass('change-sidenav-r2')
          $('.sidenav-model2r ul li').removeClass('change-li-r2')
          $('.sidenav-model2r ul li a').removeClass('change-font-r2')
        } else {
            $('.sidenav-model2r').addClass('change-sidenav-r2')
            $('.sidenav-model2r ul li').addClass('change-li-r2')
            $('.sidenav-model2r ul li a').addClass('change-font-r2')
          } 
        });

    /* Effect for Right-SideNav Model 3 */
      $(".sidelogo-r").click(function(){
        if ($('nav').hasClass('change-sidenav-r3')){
          $('.change-sidenav-r3').removeClass('change-sidenav-r3')
          $('.sidenav-model3r ul li').removeClass('change-li-r3')
          $('.sidenav-model3r ul li a').removeClass('change-font-r3')
        } else {
            $('.sidenav-model3r').addClass('change-sidenav-r3')
            $('.sidenav-model3r ul li').addClass('change-li-r3')
            $('.sidenav-model3r ul li a').addClass('change-font-r3')
          } 
        });

      });


/* Functions */

  /* Float the NavBar */
    function reSideNav(){
      if ( $('nav').hasClass('sidenav-model1r') || ($('nav').hasClass('sidenav-model2r')) 
      || ($('nav').hasClass('sidenav-model3r'))){
        $('.sidenav-fixed').addClass('right-sidenav-fixed');
        $('.sidenav-fixed').removeClass('sidenav-fixed');
        $('#sidelogo').addClass('sidelogo-r');
      }
    }

  /* Resize the logo */
    function relogo(){
      if ($('nav').hasClass('navtop-model1')){
        $('#toplogo').addClass('logo-nav1');
      }
      if ($('nav').hasClass('navtop-model2')){
        $('#toplogo').addClass('logo-nav2');
      } 
      if ($('nav').hasClass('navtop-model3')){
        $('#toplogo').addClass('logo-nav3');
      } 
    }

  /* Effect for NavTop Model 2 */
    function renav2(){
      position = Math.round($(window).scrollTop());
        if (position > 50 && $('nav').hasClass('navtop-model2')) {
          $('.navtop-model2').addClass('change-navtop-model2');
          $('.navtop-model2 ul li').addClass('change-li2');
          } else {
          $('.change-navtop-model2').removeClass('change-navtop-model2');
          $('.navtop-model2 ul li').removeClass('change-li2');
      }
    }


/* End of Functions */