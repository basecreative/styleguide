

// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/polyfiller.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/respond.js";

$(function(){


 	// Makes the tabs work
    //$( ".tabs" ).tabs();
  
  	$(".nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
  
});