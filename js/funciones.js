$(document).ready(function() {

	$('.slider-main, .slider-giveback').slick({
		arrows: false,
		dots: true
	});
	$('.slide_frases').slick();
	$('header nav a').click(function(event){
			event.preventDefault();
      var link = $(this);
      var anchor  = link.attr('href');
      var anchrTop = $(anchor).offset().top;
      $('html, body').stop().animate({
          scrollTop: anchrTop - 140
      }, 1200);
      $('header').removeClass('open');
    });
	$('.menu-btn').click(function(){
		$('header').addClass('open');
	});
	$('.close-menu').click(function(){
		$('header').removeClass('open');
	});

	$('.slider-news').slick({
		slidesToShow: 3,
		responsive: [
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});


});