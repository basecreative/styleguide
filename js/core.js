// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/polyfiller.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/fixedfixed.js";
// @codekit-prepend "vendor/isotope.min.js";
// @codekit-prepend "vendor/imagesloaded.min.js";


yepnope({
    test : Modernizr.mq('only all'),
    nope : ['js/vendor/respond.js']
});

$(function(){


	if(Modernizr.mq("(max-width: 40em)")){
        yepnope({
          test : Modernizr.csstransforms,
          yep  : 'js/vendor/swipe.js',
          complete: function(){
            document.getElementById('slider').classList.add('swipe');

            window.mySwipe = Swipe(document.getElementById('slider'),{
                disableScroll: false
            });
          }
        });
    }

	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.off-canvas').toggleClass('active');
	});
	
	//Navigation toggle
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
	});


 	// Makes the tabs work
    //$( ".tabs" ).tabs();
  
  	$(".nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
});