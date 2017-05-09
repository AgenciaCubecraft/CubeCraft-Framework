/* Effect for NavTop Model 1 */
$(window).on('scroll',function(){

    position = Math.round($(window).scrollTop());
    if (position > 50) {
		$('nav').addClass('change-navtop-model1');
		$('nav ul li').addClass('change-li');
    } else {
		$('nav').removeClass('change-navtop-model1');
		$('nav ul li').removeClass('change-li');
   }
});