// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/polyfiller.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/fixedfixed.js";
// @codekit-prepend "vendor/isotope.min.js";
// @codekit-prepend "vendor/imagesloaded.min.js";



$(function(){
	yepnope({
	    test : Modernizr.mq('only all'),
	    nope : ['/styleguide/js/vendor/respond.js']
	});

	var mySlider = document.getElementById('slider');
	if(Modernizr.mq("(max-width: 40em)") && mySlider !== undefined){
        yepnope({
          test : Modernizr.csstransforms,
          yep  : '/styleguide/js/vendor/swipe.js',
          complete: function(){
            mySlider.classList.add('swipe');

            window.mySwipe = Swipe(mySlider,{
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