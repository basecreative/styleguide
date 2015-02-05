// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/polyfiller.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/respond.js";
// @codekit-prepend "vendor/fixedfixed.js";

$(function(){

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