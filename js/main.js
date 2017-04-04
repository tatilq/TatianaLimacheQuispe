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
function apareceSection()
{
	$('.aparece').fadeIn();
	$('.ver').fadeOut();
}



/*
$(document).ready(init);

function init(){
    $('#inicio').click(navegaInicio);
    $('#sobre-mi').click(navegaSobreMi);
    $('#habilidades').click(navegaHabilidades);
    $('#proyectos').click(navegaProyectos);
    $('#contactame').click(naveContactame);
    $('h1').addClass('animated infinite pulse');
}
//navegar a seciones
function navegaInicio(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#sobreMi').hide(1000);
    $('#secInicio').show(1800);
}
function navegaSobreMi(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').show(1050);
}
function navegaHabilidades(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').show(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').hide(1050);
}
function navegaProyectos(){
    $('#secContactame').hide(1000);
    $('#secProyectos').show(1800);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(100);
    $('#sobreMi').hide(1050);
}
function naveContactame(){
    $('#secContactame').show(1800);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').hide(1050);
}
function agregaAnimacion(){
    $('#animacion').addClass('animated 0.5 bounceInDown');
}
*/