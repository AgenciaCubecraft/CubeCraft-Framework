/* Functions on Load */
  window.onload = function() {
    relogo();
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
          $('nav').removeClass('change-navtop-model3')
          $('.navtop-model3 ul li').removeClass('change-li3')
          $('.navtop-model3 ul li a').removeClass('change-font3')
          $('.logo-nav3').removeClass('change-logo3')
          $('.navtop-model3 ul li a').removeClass('change-op3')
        } else {
            $('nav').addClass('change-navtop-model3');
            $('.navtop-model3 ul li').addClass('change-li3');
            $('.navtop-model3 ul li a').addClass('change-font3')
            $('.navtop-model3 ul li a').addClass('change-op3')
            $('.logo-nav3').addClass('change-logo3')
          } 
        });

    /* Effect for SideNav Model 2 */
      $(".sidelogo").click(function(){
        if ($('nav').hasClass('change-sidenav2')){
          $('nav').removeClass('change-sidenav2')
          $('.sidenav-model2 ul li').removeClass('change-side-li2')
          $('.sidenav-model2 ul li a').removeClass('change-side-font2')
          $('#sidelogo').removeClass('change-sidelogo')
        } else {
            $('nav').addClass('change-sidenav2')
            $('.sidenav-model2 ul li').addClass('change-side-li2')
            $('.sidenav-model2 ul li a').addClass('change-side-font2')
            $('#sidelogo').addClass('change-sidelogo')
          } 
        });

      });


/* Functions */


  /* Resize the logo */
    function relogo(){
      if ($('nav').hasClass('navtop-model1')){
        $('#logoimg').addClass('logo-nav1');
      }
      if ($('nav').hasClass('navtop-model2')){
        $('#logoimg').addClass('logo-nav2');
      } 
      if ($('nav').hasClass('navtop-model3')){
        $('#logoimg').addClass('logo-nav3');
      } 
    }

  /* Effect for NavTop Model 2 */
    function renav2(){
      position = Math.round($(window).scrollTop());
        if (position > 50 && $('nav').hasClass('navtop-model2')) {
          $('nav').addClass('change-navtop-model2');
          $('nav ul li').addClass('change-li2');
          } else {
          $('nav').removeClass('change-navtop-model2');
          $('nav ul li').removeClass('change-li2');
      }
    }

/* End of Functions */