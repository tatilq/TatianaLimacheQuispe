/*******SCROLL CON MENU DINAMICO******/
$('.post_article').waypoint(
function(direction) {
if (direction ==='down') {
var wayID = $(this).attr('id');
} else {
var previous = $(this).prev();
var wayID = $(previous).attr('id');
}
$('.current').removeClass('current');
$('#main_nav a[href=#'+wayID+']').addClass('current');
}, { offset: '40%' });