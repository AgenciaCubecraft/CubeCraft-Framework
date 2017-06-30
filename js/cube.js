/* Functions on Load */
window.onload = function() {
  relogo();
};

/* Functions on Scroll */
$(window).on('scroll',function(){
  renav2();
});



/* Functions */

/* Resize the logo */
function relogo(){
  if ($('nav').hasClass('navtop-model1')){
    $('#logoimg').addClass('logo-nav1');
  }
  if ($('nav').hasClass('navtop-model2')){
    $('#logoimg').addClass('logo-nav12');
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