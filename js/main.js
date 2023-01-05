$(document).ready(function(){
    $('.toogle-mobile-menu').click(function(event) {
		$('.top-menu').toggleClass('active');
	});

    $('.service-items-title').click(function(){
        $('.service-items').removeClass('active');
        $(this).closest('.service-items').addClass('active')
    });

    $('.basic-slider').slick({ 
        dots:true,
    })
});