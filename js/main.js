$(document).ready(initPage);

function initPage()
{
	var altura = $('.navbar-fixed-top').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#navi').addClass('scroll-nav');

			$('.nav').addClass(' animated pulse infinite');
		} else {
			$('#navi').removeClass('scroll-nav');
			$('.nav').removeClass(' animated pulse infinite');
			
		}
	});
 
	$('[data-toggle="phone"]').tooltip({
        title:"927-196-255",
        animation: true}
	);

	$('[data-toggle="mail"]').tooltip({
        title:"tati34che@gmail.com",
        animation: true}
	);
	$('[data-toggle="link"]').tooltip({
        title:"visitame",
        animation: true}
	);

	$('[data-toggle="git"]').tooltip({
        title:"visitame",
        animation: true}
	);

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