$(document).ready(initPage);

function initPage()
{
	//var altura = $('.navbar-fixed-top').offset().top;
	var about = $('#about').offset().top -10;
	var project = $('#project').offset().top -10;
	var skill = $('#skill').offset().top -10;
	var contacto = $('#contacto').offset().top+30;
	

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 50 ){
			$('#navi').addClass('scroll-nav');
		} 
		else {
			$('#navi').removeClass('scroll-nav');
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

/*---------LOADING----------*/
paceOptions = {
    startOnPageLoad : false,
// Disable the 'elements' source
    elements: false,

 // Only show the progress on regular and ajax-y page navigation,
 // not every request
    restartOnRequestAfter: false
}

