(function(){
	"use strict";

	var responsive_map = function(selector){
		selector = selector || ".map--responsive";
		console.log(maps);

		var maps = maps || [],
			mapIframe = [],
			script = document.createElement('script'),
			sw,
			sortedMaps = {},
			styles = [
				{
					featureType: "landscape.man_made",
					elementType: "geometry",
					stylers: [
						{ color: "#F7F2DE" }
					]
				},{
					featureType: "road",
					elementType: "geometry.fill",
					stylers: [
						{ lightness: 100 }
					]
				},{
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [
						{ color: "#EEEBB8" }
					]
				},{
					elementType: "labels",
					stylers: [
						{ hue: "#898D86" },
						{ saturation: -100 },
						{ lightness: 25 }
					]
				},{
					featureType: "poi",
					elementType: "geometry",
					stylers: [
						{ color: "#DEE5CF" }
					]
				},{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{ color: "#C9DFE6"}
					]
				}
			],
			launch_maps = function(){
				script.type = 'text/javascript';
				script.defer = true;
				script.async = true;
				script.src = 'https://maps.googleapis.com/maps/api/js?v=3&callback=respMap';
				document.body.appendChild(script);
			},
			check_conditions = function(){
				// Get maps
				maps = [].slice.call(document.querySelectorAll(selector));
				// Get screen width
				sw = document.body.clientWidth;

				// Conditions
				if(maps.some(function(map){
				    return (sw > map.getAttribute('data-mq'));
				})){
					launch_maps(); // GO!!
				}
			},
			initialize = function(){
				console.log(maps);
				maps = [].slice.call(document.querySelectorAll(selector));

				var styledMap = new google.maps.StyledMapType(styles,
   					{name: "Base Creative"});

				maps.forEach(function(map){
					map.style.width = map.offsetWidth + "px";
					map.style.height = map.offsetHeight + "px";

					var mapOptions = {
						zoom: parseInt(map.getAttribute('data-zoom')),
						center: new google.maps.LatLng(parseFloat(map.getAttribute('data-latlng').split(',')[0]), parseFloat(map.getAttribute('data-latlng').split(',')[1])),
						mapTypeControlOptions: {
					      mapTypeIds: ['map_style', google.maps.MapTypeId.ROADMAP]
					    }
					};

					mapIframe = new google.maps.Map(map, mapOptions);
					mapIframe.mapTypes.set('map_style', styledMap);
  					mapIframe.setMapTypeId('map_style');
					
					// Marker
					var marker = new google.maps.Marker({
					    position: new google.maps.LatLng(parseFloat(map.getAttribute('data-latlng').split(',')[0]), parseFloat(map.getAttribute('data-latlng').split(',')[1])),
					    map: mapIframe,
					    icon: {
					    	anchor: new google.maps.Point(20, 35),
					    	path: "M15.253,21.903 C15.269,21.96 15.296,22.011 15.335,22.054 L20.476,31.279 C20.612,31.496 20.85,31.705 21.105,31.705 L21.463,31.705 C21.719,31.705 21.957,31.496 22.093,31.279 L27.267,22.038 C27.28,22.017 27.29,21.975 27.298,21.953 C27.885,20.915 28.195,19.734 28.195,18.549 C28.195,14.738 25.095,11.634 21.284,11.634 C17.474,11.634 14.374,14.731 14.374,18.541 C14.374,19.715 14.678,20.873 15.253,21.903 L15.253,21.903 Z M23.949,18.431 C23.949,19.902 22.756,21.095 21.284,21.095 C19.813,21.095 18.62,19.902 18.62,18.431 C18.62,16.959 19.813,15.766 21.284,15.766 C22.756,15.766 23.949,16.959 23.949,18.431 L23.949,18.431 Z",
					        fillColor: "#898D86",
					        strokeWeight: 0,
					        fillOpacity: 1,
					        scale: 1.75
					    },
					});

				});
			};

		// This needs updating
		if(typeof google !== "undefined"){
			console.log("Initializing maps...")
			initialize();
		}else{
			console.log("Loading scripts...")
			check_conditions();
		}
	};

	window.respMap = responsive_map;

	window.onload = function(){
		respMap();
	};
})();
