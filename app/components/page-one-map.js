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
	    zoomControl: false,
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
    var infoWindow = new google.maps.InfoWindow();
    
    for (var i = 0; i < locations.length; i++) {
	    var work = locations[i]
	    var myLatLng = new google.maps.LatLng(
				work.get('latitude'),
				work.get('longitude')
			);
			var marker = new google.maps.Marker({
	      position: myLatLng,
	      map: map,
	      title: work.get('title')
		  });

		 	var madeDate = self.dateMaker(work);
		  
		  var popupContent = '<div id="locationContent">' +
                           '<h2>' + work.get('title') + '</h2>' +
                           '<p>' + madeDate + ' | ' + work.get('place') + '</p>'
                         '</div>';
			
			marker.set('popupContent',popupContent)

			google.maps.event.addListener(marker, 'click', function () {
	        infoWindow.setContent(this.get('popupContent'));
	        infoWindow.open(map, this);
	    });

		  bounds.extend(myLatLng);
			map.fitBounds(bounds);
  	}

  	
  	
	},
	dateMaker: function(work) {
		var finalString;
		var minYear;
		var maxYear;
		if (work.get('min_year')<0) {
			minYear = work.get('min_year') + " BCE"
		} else {
			minYear = work.get('min_year') + " CE"
		}
		if (work.get("circa")) {
			finalString = "ca. " + minYear
		} else {
			finalString = minYear
		}
		if (work.get('max_year')) {
			if (work.get('max_year')<0) {
				maxYear = work.get('max_year') + " BCE"
			} else {
				maxYear = work.get('max_year') + " CE"
			}
			return finalString + " - " + maxYear;
		} else {
			return finalString
		}
	}
});





