import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['map'],
	didInsertElement: function() {
		var self = this;
		//google.maps.event.addDomListener(window, 'load', this.get('initializeMap'));
		setTimeout(function(){
			self.initializeMap();
		},100)
	},
	initializeMap: function() {
		var self = this;
		var works = this.get('works').toArray()
		
		// var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
		var MY_MAPTYPE_ID = 'custom_style'

		var featureOpts = [
		  {
		    "featureType": "administrative",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "landscape.man_made",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "road",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "transit",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "water",
		    "stylers": [
		      { "lightness": 36 }
		    ]
		  }
		]
	  
	  var mapOptions = {
	    zoom: 12,
    	center: new google.maps.LatLng(0, 0),
	    panControl: false,
	    zoomControl: true,
	    mapTypeControl: false,
	    streetViewControl: false,
	    mapTypeId: MY_MAPTYPE_ID
	  };


	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  this.setMarkers(map,works)

	  var styledMapOptions = {
	    name: 'Custom Style'
	  };

	  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	},
	setMarkers: function(map,locations) {
		var self = this;
		var work_count = 0
		//var lat = map.getCenter().lat(); 
    //var lng = map.getCenter().lng(); 
    var bounds = new google.maps.LatLngBounds();

    
    for (var i = 0; i < locations.length; i++) {
	    var work = locations[i]
	    var myLatLng = new google.maps.LatLng(
				work.get('latitude'),
				work.get('longitude')
			);
			var marker = new google.maps.Marker({
	      position: myLatLng,
	      map: map,
		  });
		  bounds.extend(myLatLng);
			map.fitBounds(bounds);
	    /*
	    var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address': work.get('place')}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var myLatLng = new google.maps.LatLng(
						results[0].geometry.location.lat(), 
						results[0].geometry.location.lng()
					);
					var marker = new google.maps.Marker({
			      position: myLatLng,
			      map: map,
				  });
				  work_count++
				}
			});
*/
  	}
  	
	}
});





