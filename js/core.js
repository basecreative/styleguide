// @codekit-prepend "objects/reset.js";
// @codekit-prepend "objects/tiny.js";
// @codekit-prepend "objects/responsive-map.js";

// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/tiny.js";
// @codekit-prepend "vendor/isotope.min.js";
// @codekit-prepend "vendor/imagesloaded.min.js";


// Respond
yepnope({
	test : Modernizr.mq('only all'),
	nope : ['/styleguide/js/vendor/respond.js']
});

// Placeholders
yepnope({
	test : Modernizr.placeholder,
	nope : ['/styleguide/js/vendor/span.js']
});


ready(function(){		

	var mySlider = document.querySelector('#slider');
	var navToggle = document.querySelector(".nav-toggle-menu");
	var filter = document.querySelector(".filter");

	// Toggle nav
	addTheEventListener(navToggle, "click", function(e){
		(event.preventDefault) ? event.preventDefault() : event.returnValue = false; 
		var theTarget = document.querySelector(".off-canvas");

		if(theTarget !== undefined){
			this.classList.toggle('active');
			theTarget.classList.toggle('active');
		}
	});


	// Sliders
	if(Modernizr.mq("(max-width: 40em)") && mySlider !== undefined){
		yepnope({
			test : (Modernizr.csstransforms && Modernizr.csstransitions),
			yep  : '/styleguide/js/vendor/swipe.js',
			complete: function(){
				if(Swipe !== undefined) {
					mySlider.classList.add('swipe');

					window.mySwipe = Swipe(mySlider,{
						disableScroll: false, 
						callback: function(ind){
							var bullets = mySlider.querySelectorAll('.swipe__list li');
							var current = bullets[ind];
							var siblings = Array.prototype.slice.call(current.parentNode.children);

							for (var i = siblings.length; i--;) {
							  if (siblings[i] === current) {
							    siblings.splice(i, 1);
							    break;
							  }
							}	

							for (var i = siblings.length; i--;) {
							  siblings[i].classList.remove("on");
							}	

							current.classList.add("on");
						}
					});

					// Populate bullet list
					var bullet_list = document.querySelector('.swipe__list');
					if(typeof bullet_list !== "undefined") {
						for(var b = 0; b < mySwipe.getNumSlides(); b++){
							// Create bullet
							var bullet = document.createElement('li');
							bullet.setAttribute('data-index', b);

							// Attach onclick event
							bullet.addEventListener("click", function(){
								mySwipe.slide(parseInt(this.getAttribute('data-index')));
							});

							// Append
							bullet_list.appendChild(bullet);
						}
						bullet_list.querySelector('li').classList.add('on');
					}

				}
			}
		});
	}


});