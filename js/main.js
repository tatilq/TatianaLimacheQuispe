$(document).ready(initPage);

function initPage()
{
	var altura = $('.navbar-fixed-top').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#navi').addClass('scroll-nav');
		} else {
			$('#navi').removeClass('scroll-nav');
		}
	});
 
	

slider();

}


function slider()
{
	jQuery(document).ready(function($) {

		$('.vertical-slider').unslider({
		animation:'vertical', autoplay: true, infinite: true, arrows: false});

		$('.automatic-slider').unslider({
		autoplay: true, infinite: true, arrows: false });		

	});
}
function apareceSection()
{
	$('.aparece').fadeIn();
	$('.ver').fadeOut();
}