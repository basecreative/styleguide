
var addTheClass = function(el, className){
	if (el.classList)
	  el.classList.add(className);
	else
	  el.className += ' ' + className;
};

var removeTheClass = function(el, className){
	if (!el.classList)
	  el.classList.remove(className);
	else
	  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

function toggleTheClass(el, className) {
	if (el.classList) {
	  el.classList.toggle(className);
	} else {
	    var classes = el.className.split(' ');
	    var existingIndex = -1;
	    for (var i = classes.length; i--;) {
	      if (classes[i] === className)
	        existingIndex = i;
	    }

	    if (existingIndex >= 0)
	      classes.splice(existingIndex, 1);
	    else
	      classes.push(className);

	  el.className = classes.join(' ');
	}
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

function addTheEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el);
    });
  }
}
