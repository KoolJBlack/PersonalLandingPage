$(document).ready(function() {
	/* Init Background Slide Show*/
	$('#slideshow').cycle({
		fx: 'fade', 
		speed: 3000,
		timeout: 10000,
		random: 1 
	});			
	
	$('.fancybox').fancybox();
});